const {validationResult} = require("express-validator");
const {readJSON, writeJSON} = require("../database")
const { User } = require("../database/models");
const { error } = require("console");
const bcrypt = require("bcryptjs")

module.exports = {
    register: (req, res) => {
        res.render("register", {
            session: req.session
        })
    },
    login: (req, res) => {
        if(req.session.user != undefined){
            res.redirect("index", {
                session: req.session
            })
        } else {
            res.render("users/login")
        }
        
    },
    loggedIn: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            User.findOne({
                where: {
                    email: email,
                }
            })
            .then((user)  => {
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    rol: user.rol
                }

                let tiempoDeVidaCookie = new Date(Date.now() + 60000);

                if(req.body.remember) {
                    res.cookie(
                        "userArteSanApp", 
                        req.session.user, 
                        {
                            expires: tiempoDeVidaCookie,
                            httpOnly: true
                        })
                }
    
                res.locals.user = req.session.user;
    
                res.redirect("/");
            })
            .catch(error => console.log())
        } else {
            return res.render("users/login", {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    loggedOut:(req,res) => {
        req.session.destroy();
        if(req.cookies.userArtesanApp){
            res.cookie("userArtesanApp","",{maxAge:-1})
        }
        res.redirect("/")
    },
    storeUser: (req,res) => {
/* 
       let data = req.body;
       let database = readJSON("users.json");
       let errors = validationResult(req);

       if (errors.isEmpty()) {
           let newUser = {
               id:database.length ? database[database.length - 1].id + 1 : 1,
               name:data.name,
               email:data.email,
               pass:data.pass,
    
           };

           database.push(newUser);
           writeJSON("users.json",database);
           return res.redirect("login");
       } else {
        return res.render("register", {
            errors: errors.mapped(),
            old: req.body,
            session:req.session
        })
       }
    }, */
    let errors = validationResult(req);

        if(errors.isEmpty()) {
            
            let newUser = {
             name: req.body.name,
             last_name: req.body.last_name,
             email: req.body.email,
             pass: bcrypt.hashSync(req.body.pass, 12),
             avatar: req.file ? req.file.filename : "default-image.png",
             rol: 0,
         
            };

            User.create(newUser)
            .then(() => {
               return res.redirect("users/login");
            })
            .catch(error => console.log(error))
        } else {
            res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    showProfile:(req,res) => {
        res.render("users/showProfile",{
            session:req.session
        })
    },
    profile: (req,res) => {
        res.render("userProfile", {
            session:req.session
        })
    },
    updateProfile: (req,res) => {
       /*  let userDB = readJSON("users.json");

        let userId = req.session.user.id;
        let user = userDB.find(user => user.id === userId);

        const {name,email,pass} = req.body;
        
            user.name = name,
            user.email = email,
            user.pass = pass
        
        
        
        writeJSON("users.json", userDB);
        
        delete user.pass;
        
        req.session.user = user
        
        return res.redirect("users/showProfile")

    }, */
    let errors = validationResult(req);

    if(errors.isEmpty()) {

        let userId = req.session.user.id;
        let user = users.find(user => user.id === userId);

        const {
            name,
            last_name,
        } = req.body;

        user.name = name;
        user.last_name = last_name;
        user.avatar = req.file ? req.file.filename : user.avatar;

        writeUsersJson(users)

        delete user.pass;

        req.session.user = user;

        return res.redirect("/users/showProfile");
    } else {
        const userInSessionId = req.session.user.id;
        const userInSession = users.find(user => user.id === userInSessionId);

        return res.render("user/showProfile", {
            user: userInSession,
            session: req.session,
            errors: errors.mapped(),
        })
    }
},
    
    deleteProfile:(req,res) => {
       /*  const userId = req.session.user.id;
      let userDB = readJSON("users.json");

        let user = userDB.find(user => user.id === userId);

        userDB.pop(user);

        writeJSON("users.json", userDB); */

        res.redirect("/")
    }
}