using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QuizzApp.Models;

namespace QuizzApp.Controllers
{
    public class ParticipantController : Controller
    {
        QuizzAppDbContext db = new QuizzAppDbContext();
        // GET: Participant
        public ActionResult GetAll()
        {
            var participants = db.Participant.ToList();
            return Json(participants,JsonRequestBehavior.AllowGet);
        }

        // POST: Participant
        [HttpPost]
        public ActionResult Create(Participant participant)
        {
            db.Participant.Add(participant);
            db.SaveChanges();
            return Json("Success", JsonRequestBehavior.AllowGet);
        }
    }
}