using NashvillePublicArtCapstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NashvillePublicArtCapstone.DAL
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ApplicationUser> GetUsers()
        {
            return _context.Users;
        }

        public void Save(ApplicationUser newUser)
        {
            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}