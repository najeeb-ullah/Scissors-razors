const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");

router.post("/signup", (req, res) => {
  const { name, dateOfBirth, contact, email, password } = req.body;
  if (!name || !dateOfBirth || !contact || !email || !password) {
    return res.status(422).json({ error: "Please enter all fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exists with this email" });
      }

      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          name,
          dateOfBirth,
          contact,
          email,
          password: hashedPassword,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please add email and password" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "invalid email/Password" });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            // res.json({ message: "successfully Signed in" });
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            const { _id, name, email } = savedUser;
            res.json({ token, user: { _id, name, email } });
          } else {
            return res.status(422).json({ error: "invalid email/Password" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .then((err) => {
      console.log(err);
    });
});

router.put("/updateprofile", (req, res) => {
  const { id, name, email, contact, password } = req.body;

  console.log("hi" + bcrypt.hash(password, 12) + " hi");
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      hashed = hashedPassword;
      console.log(hashed);

      User.findByIdAndUpdate(
        id,
        {
          name,
          email,
          contact,
          password: hashedPassword,
        },
        { new: true, useFindAndModify: false }
      )
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          res.status(422).json({ error });
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
