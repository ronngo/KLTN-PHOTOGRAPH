using _21_CS_NH.Infrastructure;
using _21_CS_NH.Resources;
using _21_CS_NH.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web.Mvc;
using Umbraco.Core;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.Services;
using Umbraco.Web;
using Umbraco.Web.Mvc;
using Umbraco.Web.PublishedModels;

namespace _21_CS_NH.Controllers
{
    public class ContactController : SurfaceController
    {
        private readonly MailHelper _mailHelper;

        public ContactController()
        {
            _mailHelper = new MailHelper();
        }
        [HttpGet]
        public ActionResult RenderContact()
        {
            return PartialView("~/Views/Partials/Contact.cshtml");
        }

        [HttpPost]
        public ActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                var home = (Home)Umbraco.ContentAtRoot().FirstOrDefault(x => x.ContentType.Alias == "home");
                var contact = (Contacts)home.Children().FirstOrDefault(x => x.ContentType.Alias == "contacts");
                GuidUdi pageUdi = new GuidUdi(contact.ContentType.ItemType.ToString(), contact.Key);

                var name = string.Format("{0} - {1}", model.Name, DateTime.Now.ToString());
                var send = Services.ContentService.CreateContent(name, pageUdi, "Contact");
                send.SetValue("fullName", model.Name);
                send.SetValue("email", model.Email);
                send.SetValue("phone", model.Phone);
                send.SetValue("message", model.Message);
                Services.ContentService.SaveAndPublish(send);

                try
                {
                    List<MailAddress> toEmails = new List<MailAddress>();
                    toEmails.Add(new MailAddress(contact.Email));
                    if (toEmails.Any())
                    {
                        string subject = name;
                        object[] args = new object[] {
                            home.Url(mode: UrlMode.Absolute),
                            model.Name,
                            model.Email,
                            model.Phone ,
                            model.Message
                        };
                        var body = string.Format(EmailTemplates.Contact, args);
                        _mailHelper.Send(toEmails, subject, body);
                    }
                }
                catch (Exception ex)
                {
                    Services.ContentService.Delete(send);
                    TempData["ErrorMessage"] = Umbraco.GetDictionaryValue("ErrorMessage.Contact");
                    return RedirectToCurrentUmbracoPage();
                }

                TempData["SuccessMessage"] = Umbraco.GetDictionaryValue("SuccessMessage.Contact");
                return RedirectToCurrentUmbracoPage();
            }
            TempData["ErrorMessage"] = Umbraco.GetDictionaryValue("ErrorMessage.Contact");
            return RedirectToCurrentUmbracoPage();
        }
    }
}