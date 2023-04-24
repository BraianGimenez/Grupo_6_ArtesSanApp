const {check,body} = require("express-validator");
const {readJSON} = require("../database");
const { User } = require("../database/models")

module.exports = [
    check("email")
        .notEmpty().withMessage("Debe ingresar su email").bail()
        .isEmail().withMessage("debe ingresar un email valido")
    ,
    body("email")
    .custom(value => {
      return  User.findOne({
            where : {
                email: value
            }
        })
        .then(user => {
            if (user){
                return false
            } else {
                return true
            }

        })
        .catch(error => console.log(error));

     /*    let usersDB = readJSON("users.json");

        let user = usersDB.find(user => user.email === value);

        return user !== undefined; */
    })
    .withMessage("Email no registrado")
    ,
    check("pass")
        .notEmpty().withMessage("debe ingresar una contraseña").bail()
        .isLength({ min: 6 , max:10}).withMessage("La contraseña debe tener un minimo de 6 y un maximo de 10")
    ,
    body("pass")
    .custom((value, { req }) => {
        return User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then((user) => {
            if(!bcrypt.compareSync(value, user.dataValues.pass)) {
                return Promise.reject();
            }
        })
        .catch(() => Promise.reject("Email o contraseña incorrecto"))
    }),
]