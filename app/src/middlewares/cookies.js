module.exports = (req, res, next) => {
    if(req.cookies.userArtesanApp && !req.session.user) {
        req.session.user = req.cookies.userArtesanApp;
        res.locals.user = req.session.user;
    }
    next();
}