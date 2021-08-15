using System;
using System.Web;

namespace _21_CS_NH.Infrastructure
{
    public static class QueryStringHelper
    {
        public static int GetIntFromQueryString(HttpRequestBase request, string key, int fallbackValue = 0)
        {
            if (!string.IsNullOrEmpty(request.QueryString[key]))
            {
                fallbackValue = Convert.ToInt32(HttpContext.Current.Request.QueryString[key]);
            }
            return fallbackValue;
        }
        public static int GetFirstIndividualPageIndex(int individualPagesDisplayedCount, int totalPages, int pageIndex)
        {
            int num = individualPagesDisplayedCount / 2;
            if ((totalPages < individualPagesDisplayedCount) || ((pageIndex - num) <= 0))
            {
                return 0;
            }
            if ((pageIndex + num) >= totalPages)
            {
                return (totalPages - individualPagesDisplayedCount);
            }
            return pageIndex - num - 1;
        }

        public static int GetLastIndividualPageIndex(int individualPagesDisplayedCount, int totalPages, int pageIndex)
        {
            int num = individualPagesDisplayedCount / 2;
            if ((individualPagesDisplayedCount % 2) == 0)
            {
                num--;
            }
            if ((totalPages < individualPagesDisplayedCount) || ((pageIndex + num) >= totalPages))
            {
                return (totalPages - 1);
            }
            if ((pageIndex - num) <= 0)
            {
                return individualPagesDisplayedCount - 1;
            }
            return pageIndex + num - 1;
        }
    }
}