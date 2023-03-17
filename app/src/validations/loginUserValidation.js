const {check,body} = require("express-validator");
const {readJSON} = require("../database");

module.exports = [
    check("email")
        .notEmpty().withMessage("Debe ingresar su email").bail()
        .isEmail().withMessage("debe ingresar un email valido")
    ,
    body("email")
    .custom(value => {
        let usersDB = readJSON("users.json");

        let user = usersDB.find(user => user.email === value);

        return user !== undefined;
    })
    .withMessage("Email no registrado")
    ,
    check("pass")
        .notEmpty().withMessage("debe ingresar una contraseña").bail()
        .isLength({ min: 6 , max:10}).withMessage("La contraseña debe tener un minimo de 6 y un maximo de 10")
    ,

    body("pass")
    .custom((value, { req }) => {
        let usersDB = readJSON("users.json");

        let user = usersDB.find(user => user.email === req.body.email);

        /* return bcrypt.compareSync(value, user.pass);  */
        return (value === user.pass);
    })
    .withMessage("Contraseña inválida")
]