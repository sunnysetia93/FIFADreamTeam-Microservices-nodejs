const route = require('express').Router();
const request = require('request-promise')

route.get('/', async (req,res)=>{

    if(!req.query || !req.query.player_name){
        res.status(400).json({
            result:"player_name as parameter is required"
        })
    }
    else{
        
        const uri = `http://localhost:3500/data-api/player/?player_name=${req.query.player_name}`
        const data = await request(uri);
        res.status(200).json(data);
    }
})

module.exports = route;