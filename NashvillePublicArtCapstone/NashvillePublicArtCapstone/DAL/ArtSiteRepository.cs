using NashvillePublicArtCapstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NashvillePublicArtCapstone.DAL
{
    public class ArtSiteRepository
    {
        readonly AppContext _context;

        public ArtSiteRepository(AppContext context)
        {
            _context = context;
        }

        public IEnumerable<ArtSite> GetListOfArtSites()
        {
            return _context.ArtSites;
        }

        // Do I need the delete and saves here or just in front end stuff?
    }
}