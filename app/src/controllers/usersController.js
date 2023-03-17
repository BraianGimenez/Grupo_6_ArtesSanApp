const {validationResult} = require("express-validator");
const {readJSON, writeJSON} = require("../database")

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
            res.render("login")
        }
        
    },
    loggedIn: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usersDB = readJSON("users.json");

            let user = usersDB.find(user => user.email === req.body.email);
            req.session.user = {
                id:user.id,
                name:user.name,
                email:user.email,
                pass:user.pass,
                recordar:user.recordar,
                rol:user.rol
            }

            let cookieLife = new Date(Date.now() + 60000); 

            if(req.body.recordar){
                res.cookie("userArtesanApp",
                req.session.user,
                {
                    expires:cookieLife,
                    httpOnly: true
                })
            }

            res.locals.user = req.session.user

            res.redirect("/")
        } else {
            res.render("login", {
                errors: errors.mapped(),
                session:req.session
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
           return res.redirect("/user/login");
       } else {
        return res.render("register", {
            errors: errors.mapped(),
            old: req.body,
            session:req.session
        })
       }
    },
    showProfile:(req,res) => {
        res.render("showProfile",{
            session:req.session
        })
    },
    profile: (req,res) => {
        res.render("userProfile", {
            session:req.session
        })
    },
    updateProfile: (req,res) => {
        let userDB = readJSON("users.json");

        let userId = req.session.user.id;
        let user = userDB.find(user => user.id === userId);

        const {name,email,pass} = req.body;
        
            user.name = name,
            user.email = email,
            user.pass = pass
        
        
        
        writeJSON("users.json", userDB);
        
        delete user.pass;
        
        req.session.user = user
        
        return res.redirect("/user/showProfile")

    },
    deleteProfile:(req,res) => {
        const userId = req.session.user.id;
        let userDB = readJSON("users.json");

        let user = userDB.find(user => user.id === userId);

        userDB.pop(user);

        writeJSON("users.json", userDB);

        res.redirect("/")
    }
}