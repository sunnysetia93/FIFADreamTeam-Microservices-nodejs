const route = require('express').Router();
const request = require('request-promise')
route.get('/', async (req,res)=>{

    if(!req.query || !req.query.club_name){
        res.status(400).json({
            result:"club_name as parameter is required"
        })
    }
    else{
        
        const uri = `http://localhost:3500/data-api/club/?club_name=${req.query.club_name}`
        const data = await request(uri);
        res.status(200).json(data);
    }
})

module.exports = route;