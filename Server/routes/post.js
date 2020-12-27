const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const HairCare = mongoose.model("HairCare");
const BeardCare = mongoose.model("BeardCare");
const SkinCare = mongoose.model("SkinCare");
const Deal = mongoose.model("Deal");
const SkinService = mongoose.model("SkinService");
const BeardService = mongoose.model("BeardService");
const HairService = mongoose.model("HairService");
const User = mongoose.model("User");
const Review = mongoose.model("Review");
const Appointment = mongoose.model("Appointment");
const Employee = mongoose.model("Employee");
const requireLogin = require("../middleware/requireLogin");
const nodemailer = require("nodemailer");
const { json } = require("express");
const axios = require("axios");

router.post("/addhaircare", requireLogin, (req, res) => {
  const { title, body, quantity, price, pic } = req.body;

  if (!title || !body || !pic || !quantity || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  // req.user.password = undefined;
  const hairCare = new HairCare({
    title,
    body,
    quantity,
    price,
    photo: pic,
  });
  hairCare
    .save()
    .then((result) => {
      res.json({ hairCare: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addbeardcare", requireLogin, (req, res) => {
  const { title, body, quantity, pic, price } = req.body;

  if (!title || !body || !pic || !quantity || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  // req.user.password = undefined;
  const beardCare = new BeardCare({
    title,
    body,
    quantity,
    price,
    photo: pic,
  });
  beardCare
    .save()
    .then((result) => {
      res.json({ beardCare: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addskincare", requireLogin, (req, res) => {
  const { title, body, quantity, pic, price } = req.body;

  if (!title || !body || !pic || !quantity || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  // req.user.password = undefined;
  const skinCare = new SkinCare({
    title,
    body,
    quantity,
    price,
    photo: pic,
  });
  skinCare
    .save()
    .then((result) => {
      res.json({ skinCare: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allhaircare", (req, res) => {
  HairCare.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allbeardcare", (req, res) => {
  BeardCare.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allskincare", (req, res) => {
  SkinCare.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/adddeal", requireLogin, (req, res) => {
  const { title, body, price } = req.body;

  if (!title || !body || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  const deal = new Deal({
    title,
    body,
    price,
  });
  deal
    .save()
    .then((result) => {
      res.json({ deal: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addskinservice", requireLogin, (req, res) => {
  const { title, body, price } = req.body;

  if (!title || !body || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  const skinService = new SkinService({
    title,
    body,
    price,
  });
  skinService
    .save()
    .then((result) => {
      res.json({ skinService: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addbeardservice", requireLogin, (req, res) => {
  const { title, body, price } = req.body;

  if (!title || !body || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  const beardService = new BeardService({
    title,
    body,
    price,
  });
  beardService
    .save()
    .then((result) => {
      res.json({ beardService: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addhairservice", requireLogin, (req, res) => {
  const { title, body, price } = req.body;

  if (!title || !body || !price) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  const hairService = new HairService({
    title,
    body,
    price,
  });
  hairService
    .save()
    .then((result) => {
      res.json({ hairService: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allhairservices", (req, res) => {
  HairService.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allskinservices", (req, res) => {
  SkinService.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allbeardservices", (req, res) => {
  BeardService.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allDeals", (req, res) => {
  Deal.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/updatebeardservice", requireLogin, (req, res) => {
  console.log(req.body);
  const { title, body, price } = req.body;
  BeardService.findByIdAndUpdate(req.body.serviceId, {
    title,
    body,
    price,
  }).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.delete("/deletebeardservice/:postId", requireLogin, (req, res) => {
  BeardService.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deletehairservice/:postId", requireLogin, (req, res) => {
  HairService.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deleteskinservice/:postId", requireLogin, (req, res) => {
  SkinService.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deletedeal/:postId", requireLogin, (req, res) => {
  Deal.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deletehaircare/:postId", requireLogin, (req, res) => {
  HairCare.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deleteskincare/:postId", requireLogin, (req, res) => {
  SkinCare.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/deletebeardcare/:postId", requireLogin, (req, res) => {
  BeardCare.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.put("/updatehairstock/:postTitle", requireLogin, (req, res) => {
  console.log(req.body);
  HairCare.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { quantity: req.body.quantity } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/updatebeardstock/:postTitle", requireLogin, (req, res) => {
  console.log(req.body);
  const { title, quantity } = req.body;
  BeardCare.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { quantity: req.body.quantity } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/updateskinstock/:postTitle", requireLogin, (req, res) => {
  SkinCare.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { quantity: req.body.quantity } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/addskinstock", requireLogin, (req, res) => {
  SkinCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: 1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/decreaseskinstock", requireLogin, (req, res) => {
  SkinCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: -1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/addhairstock", requireLogin, (req, res) => {
  HairCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: 1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/decreasehairstock", requireLogin, (req, res) => {
  HairCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: -1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/addbeardstock", requireLogin, (req, res) => {
  BeardCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: 1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/decreasebeardstock", requireLogin, (req, res) => {
  BeardCare.findByIdAndUpdate(
    req.body.postId,
    {
      $inc: { quantity: -1 },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.post("/sendemail", requireLogin, (req, res) => {
  if (!req.body.subject || !req.body.body) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
    }
    var mailList = [];
    allUsers.forEach(function (users) {
      mailList.push(users.email);
      return mailList;
    });
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "scissorsandrazorz@gmail.com",
        pass: "Project1234",
      },
    });
    var mailOptions = {
      to: [],
      bcc: mailList,
      from: "no-reply@gmail.com",
      subject: req.body.subject,
      text: req.body.body,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }).then((result) => {
    res.json({ result });
  });
});

router.put("/updatebeardserviceprice/:postTitle", requireLogin, (req, res) => {
  const { title, price } = req.body;
  BeardService.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { price: req.body.price } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/updatehairserviceprice/:postTitle", requireLogin, (req, res) => {
  const { title, price } = req.body;
  HairService.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { price: req.body.price } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/updateskinserviceprice/:postTitle", requireLogin, (req, res) => {
  const { title, price } = req.body;
  SkinService.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { price: req.body.price } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/updatedealprice/:postTitle", requireLogin, (req, res) => {
  const { title, price } = req.body;
  Deal.findOneAndUpdate(
    { title: req.params.postTitle },
    { $set: { price: req.body.price } },
    { new: true, useFindAndModify: false }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.post("/addreview", requireLogin, (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  req.user.password = undefined;
  const review = new Review({
    title,
    body,
    postedBy: req.user,
  });
  review
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myreviews", requireLogin, (req, res) => {
  Review.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allreviews", (req, res) => {
  Review.find()
    .populate("postedBy", "_id name email")
    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deletereview/:reviewId", requireLogin, (req, res) => {
  Review.findOne({ _id: req.params.reviewId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
//Customers who have birthday in this month
router.get("/customersbirthday", requireLogin, (req, res) => {
  User.aggregate([
    {
      $match: {
        $expr: {
          $eq: [{ $month: "$dateOfBirth" }, { $month: new Date() }],
        },
      },
    },
  ])
    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allusers", (req, res) => {
  User.find()

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deletecustomer/:customerId", requireLogin, (req, res) => {
  Review.deleteMany({ postedBy: req.params.customerId }).exec((err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    console.log("Review Deleted");

    // post
    //   .remove()
    //   .then((result) => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });

  Appointment.deleteMany({ postedBy: req.params.customerId }).exec((err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    console.log("Appointment Deleted");

    // post
    //   .remove()
    //   .then((result) => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });
  User.findOne({ _id: req.params.customerId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

//send Email to all the customers who have birthday in this month
router.post("/birthdayemail", requireLogin, (req, res) => {
  if (!req.body.subject || !req.body.body) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  User.aggregate(
    [
      {
        $match: {
          $expr: {
            $eq: [{ $month: "$dateOfBirth" }, { $month: new Date() }],
          },
        },
      },
    ],
    function (err, allUsers) {
      if (err) {
        console.log(err);
      }
      var mailList = [];
      allUsers.forEach(function (users) {
        mailList.push(users.email);
        return mailList;
      });
      var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "scissorsandrazorz@gmail.com",
          pass: "Project1234",
        },
      });
      var mailOptions = {
        to: [],
        bcc: mailList,
        from: "no-reply@gmail.com",
        subject: req.body.subject,
        text: req.body.body,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  ).then((result) => {
    res.json({ result });
  });
});

router.post("/bookappointment", requireLogin, (req, res) => {
  const { date, time, barber } = req.body;

  if (!date || !time || !barber) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  Appointment.findOne({ time: time, date: date, barber: barber })
    .then((data) => {
      if (data) {
        return res
          .status(422)
          .json({ error: "Slot is booked kindly select another one" });
      }

      req.user.password = undefined;
      const appointment = new Appointment({
        date,
        time,
        barber,
        postedBy: req.user,
      });
      appointment.save().then((result) => {
        res.json({ post: result });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myappointments", requireLogin, (req, res) => {
  Appointment.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allappointments", requireLogin, (req, res) => {
  Appointment.find()
    .populate("postedBy", "_id name email contact")
    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deleteappointment/:appointmentId", requireLogin, (req, res) => {
  Appointment.findOne({ _id: req.params.appointmentId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/todayappointments", requireLogin, (req, res) => {
  Appointment.aggregate([
    {
      $match: {
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, { $month: new Date() }] },
            {
              $eq: [{ $dayOfMonth: "$date" }, { $dayOfMonth: new Date() }],
            },
            { $eq: [{ $year: "$date" }, { $year: new Date() }] },
          ],
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "postedBy",
        foreignField: "_id",
        as: "postedBy",
      },
    },
    { $unwind: "$postedBy" },
  ])

    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/userdata", requireLogin, (req, res) => {
  if (!req.user.id) {
    res.json("user is not logged in");
  }
  User.find({ _id: req.user._id })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allemployee", requireLogin, (req, res) => {
  Employee.find()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addemployee", requireLogin, (req, res) => {
  const { name, contact, cnic } = req.body;

  if (!name || !contact || !cnic) {
    return res.status(422).json({ error: "kindly add all the fields" });
  }

  const employee = new Employee({
    name,
    contact,
    cnic,
  });
  employee
    .save()
    .then((result) => {
      res.json({ employee: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/deleteemployee/:employeeId", requireLogin, (req, res) => {
  Employee.findOne({ _id: req.params.employeeId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }

    post
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/findfaceshape", async (req, res) => {
  await axios
    .post("https://faceshapefinder.herokuapp.com/check", {
      url: req.body.url,
    })
    .then((result) => {
      res.send(result.data);
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = router;
