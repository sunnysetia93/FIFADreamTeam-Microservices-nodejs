function ensureLoggedIn() {

    return function (req, res, next) {

        if (!req.user) {
            res.status(400).json({
                result:"Authentication Error!"
            })
        } else {
            console.log("Ensure Logged In - Success.");
            next();
        }

    }

}

module.exports = {
    eli: ensureLoggedIn
};