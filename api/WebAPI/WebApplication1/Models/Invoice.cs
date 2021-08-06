using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Invoice
    {
        public int InvoiceNo { get; set; }
        public string InvoiceDate { get; set; }
        public string IssuedPersonName { get; set; }
        public string TotalAmount { get; set; }
     

    }
}