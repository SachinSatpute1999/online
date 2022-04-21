using System;
using System.Collections.Generic;
using System.Text;
using grocery.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace grocery.test
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]

        public void IndexTest()
        {
            //Arrange
            HomeController controller = new HomeController();


            //act
            var result = controller.Index();
            

            //assert
            Assert.IsTrue(result is ViewResult, "Index action does not return view");


        }
       



    }
}
