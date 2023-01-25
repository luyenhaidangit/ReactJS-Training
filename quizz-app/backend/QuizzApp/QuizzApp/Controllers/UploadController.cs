using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuizzApp.Controllers
{
    public class UploadController : Controller
    {
        [HttpPost]
        public ActionResult UploadFile(HttpPostedFileBase file)
        {
            try
            {
                if (file.ContentLength > 0)
                {
                    string currentDirectory = Directory.GetCurrentDirectory();
                    string _FileName = Path.GetFileName(file.FileName);
                    string _path = Path.Combine(Server.MapPath("~/UploadedFiles"), _FileName);
                    file.SaveAs(_path);
                }
                ViewBag.Message = "File Uploaded Successfully!!";
                return Json("Success",JsonRequestBehavior.AllowGet);
            }
            catch
            {
                ViewBag.Message = "File upload failed!!";
                return Json("Fail");
            }
        }
    }
}