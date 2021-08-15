using _21_CS_NH.Infrastructure.Attribute;

namespace _21_CS_NH.ViewModel
{
    public class ContactViewModel
    {
        public int Id { get; set; }

        [UmbracoRequired("Common.Required")]
        [UmbracoDisplayName("Common.Name")]
        [UmbracoStringLength("Common.StringLength", 100, MinimumLength = 5)]
        public string Name { get; set; }

        [UmbracoRequired("Common.Required")]
        [UmbracoDisplayName("Common.Email")]
        [UmbracoRegularExpression("Common.InvalidEmail", "^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?$")]
        [UmbracoStringLength("Common.StringLength", 100, MinimumLength = 5)]
        public string Email { get; set; }
        
        [UmbracoRequired("Common.Required")]
        [UmbracoDisplayName("Common.Phone")]
        [UmbracoRegularExpression("Common.InvalidPhone", "^[0-9]*$")]
        [UmbracoStringLength("Common.StringLength", 15, MinimumLength = 7)]
        public string Phone { get; set; }
        
        [UmbracoRequired("Common.Required")]
        [UmbracoDisplayName("Common.Message")]
        [UmbracoStringLength("Common.StringLength", 1000, MinimumLength = 10)]
        public string Message { get; set; }
    }
}