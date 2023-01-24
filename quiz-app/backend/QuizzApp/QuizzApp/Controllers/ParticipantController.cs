using QuizzApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuizzApp.Controllers
{
    public class ParticipantController : Controller
    {
        QuizzAppDbContext dbContext = new QuizzAppDbContext();
        // GET: Participant
        public ActionResult GetAll()
        {
            List<Participant> participants = dbContext.Participant.ToList();
            return Json(participants,JsonRequestBehavior.AllowGet);
        }

        // GET: Participant/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Participant/Create
        [HttpPost]
        public ActionResult Create(Participant participant)
        {
            bool created = false;
            try
            {
                dbContext.Participant.Add(participant);
                dbContext.SaveChanges();
                created= true;
            }
            catch
            {
                created= false;
            }
            return Json(created,JsonRequestBehavior.AllowGet);
        }

        // POST: Participant/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Participant/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Participant/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Participant/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Participant/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
