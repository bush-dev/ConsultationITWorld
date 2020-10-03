using ConsultationITWorld.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsultationITWorld.Core.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        User Create(User user, string password);
        User GetById(int id);

        List<User> GetUsers();
    }
}
