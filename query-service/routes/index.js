const route = require('express').Router();
const User = require('../db').User;
const passport = require('../auth/passport');
const eli = require('../auth/utils').eli;
const AuthToken = require('../db').Token;
const uid2 = require('uid2');


route.post('/signup',(req,res)=>
{
    User.create({
        username:req.body.username,
        name:req.body.name,
        password:req.body.password  //not recommended. Use Hashed Passwords
    }).then((user)=>
    {
        res.status(200).json({
            result:"success",
            status:"200"
        });
    }).catch((err)=>
    {
        res.status(500).json(err);
    });
});

route.post('/login',passport.authenticate('local',{
    successRedirect:'/profile',
    failureRedirect:'/error'
}));

// route.get('/logout',(req,res)=>
// {
//     console.log("User Id - "+ req.user.id + ' Logged Out')
//     req.user=null;
//     req.logout();
//     req.session.destroy(function()
//     {
//         res.redirect('/login.html');
//     })
// })

route.get('/profile',eli(),(req,res)=>
{
    res.status(200).json(req.user);
});

route.get('/error',(req,res)=>
{
    res.status(400).json({
        result:"Authentication Error"
    });
});

route.get('/token',eli(),(req,res)=>
{
    AuthToken.find({
        where:{
            userId:req.user.id
        }
    }).then((authToken)=>
    {
        if(!authToken)
            return res.status(404).json("Not Found");
        res.status(200).json(authToken.token_no);

    }).catch((err)=>
    {
       return res.status(500).json(err);
    })
})

route.post('/token',passport.authenticate('local'),(req,res)=>
{
    console.log("Inside Post Token");
    AuthToken.create({
        token_no:uid2(20),
        userId:req.user.id
    }).then((authToken)=>
    {
        console.log(authToken.token_no);
        return res.status(200).json(authToken.token_no)
    });
});

module.exports = route;