using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NashvillePublicArtCapstone.Controllers
{
    public class ProfileController : Controller
    {
        public ActionResult Profile()
        {
            ViewBag.Title = "Profile Page";

            return View();
        }
    }
}
