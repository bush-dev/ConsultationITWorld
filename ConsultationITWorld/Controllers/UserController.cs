﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ConsultationITWorld.Core.Helpers;
using ConsultationITWorld.Core.Interfaces;
using ConsultationITWorld.Data.Models;
using ConsultationITWorld.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace ConsultationITWorld.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly AppSettings _appSettings;
        
        public UserController(IUserService userService, IOptions<AppSettings> appSettings)
        {
            _userService = userService;
            _appSettings = appSettings.Value;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserViewModel userViewModel)
        {
            var user = _userService.Authenticate(userViewModel.Login, userViewModel.Password);

            if(user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF32.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new
            {
                Id = user.Id,
                Username = user.Login,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Token = tokenString
            });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserViewModel userViewModel)
        {
            User user = new User()
            {
                FirstName = userViewModel.FirstName,
                LastName = userViewModel.LastName,
                Login = userViewModel.Login,
                Address = userViewModel.Address,
                Country = userViewModel.Country,
                Email = userViewModel.Email,
                PhoneNumber = userViewModel.PhoneNumber
            };

            var createdUser =  _userService.Create(user, userViewModel.Password);

            return Ok(createdUser);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetUsers();

            return Ok(users);
        }
    }
}
