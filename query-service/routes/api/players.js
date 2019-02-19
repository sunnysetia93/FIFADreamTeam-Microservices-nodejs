const route = require('express').Router();
const request = require('request-promise')

route.get('/:player_name', async (req,res)=>{
    
    if(!req.query || !req.params.player_name){
        res.status(400).json({
            result:"player_name as parameter is required"
        })
    }
    else{
        
        const uri = `http://localhost:3500/data-api/player/${req.params.player_name}`
        request(uri)
        .then((data)=>{
            res.status(200).json(JSON.parse(data));
        })
    }
})

module.exports = route;