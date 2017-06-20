using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NashvillePublicArtCapstone.Models
{
    public class ArtSite
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Photo { get; set; }
        public string ArtistFirstName { get; set; }
        public string ArtistLastName { get; set; }
        public string Location { get; set; }
        public string Medium { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
    }
}