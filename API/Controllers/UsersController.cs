﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        // Write your code from here










        
        
        

        //----------------------------------------------------------
        // For testing
        [HttpGet("test")]
        public List<string> GetUserTest()
        {
            return new List<string>()
            {
                "Ehsan Bijad",
                "Shayan Vaghei"
            };
        }
    }
}