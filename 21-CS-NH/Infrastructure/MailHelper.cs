using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;

namespace _21_CS_NH.Infrastructure
{
    public class MailHelper
    {
        private readonly SmtpClient _smtpClient; 

        public delegate void SendMailHandler(string[] toEmails, string subject, string body, object attachs = null);

        public MailHelper()
        {
            _smtpClient = new SmtpClient();
        }

        public void Send(List<MailAddress> toEmails, string subject, string body)
        {
            var fromAddress = new MailAddress("ngocha.pianist.bot@gmail.com", "Ngoc Ha Pianist");

            MailMessage message = new MailMessage()
            {
                From = fromAddress,
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };

            // Create the HTML view
            var htmlView = AlternateView.CreateAlternateViewFromString(body,
                                                         Encoding.UTF8,
                                                         MediaTypeNames.Text.Html);
            var imageLinked = EmailLogoLinkedResource();
            htmlView.LinkedResources.Add(imageLinked);
            message.AlternateViews.Add(htmlView);


            foreach (var toEmail in toEmails)
            {
                message.To.Add(toEmail);
            }

            _smtpClient.Send(message);
        }

        private LinkedResource EmailLogoLinkedResource()
        {
            string appPath = AppDomain.CurrentDomain.BaseDirectory;
            var resource = new LinkedResource(Path.Combine(appPath + @"Media\logo_full.png"));
            resource.ContentId = "logo_embedded";
            resource.ContentType.MediaType = MediaTypeNames.Image.Jpeg;
            resource.TransferEncoding = TransferEncoding.Base64;
            resource.ContentType.Name = resource.ContentId;
            resource.ContentLink = new Uri("cid:" + resource.ContentId);

            return resource;
        }
    }
}