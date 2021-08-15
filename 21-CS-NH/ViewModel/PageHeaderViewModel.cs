using System;
using System.Linq;
using Umbraco.Core.Models;

namespace _21_CS_NH.ViewModel
{
    public class PageHeaderViewModel
    {
        public PageHeaderViewModel(string name, string title, MediaWithCrops backgroundImage, string authorName = null, DateTime? createDate = null, string alias = null)
        {
            Name = name;
            Title = title;
            BackgroundImage = backgroundImage;
            HasBackgroundImage = backgroundImage != null;
            AuthorName = authorName;
            HasAuthor = authorName != "";
            CreateDate = createDate;
            IsNews = alias == "news";
            Alias = alias;
        }

        public string Name { get; set; }
        public string Title { get; set; }
        public MediaWithCrops BackgroundImage { get; set; }
        public bool HasBackgroundImage { get; }
        public string AuthorName { get; set; }
        public bool HasAuthor { get; }
        public DateTime? CreateDate { get; set; }
        public bool IsNews { get; }
        public string Alias { get; set; }
    }
}