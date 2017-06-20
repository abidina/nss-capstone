using NashvillePublicArtCapstone.DAL;
using NashvillePublicArtCapstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NashvillePublicArtCapstone.Controllers
{
    public class UserController : Controller
    {
        private readonly UserRepository _userRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public ActionResult Index()
        {
            var userList = _userRepository.GetUsers();
            return View("index", userList);
        }
        [HttpGet]
        public ActionResult AddUser()
        {
            return View("AddUser");
        }
    }
}