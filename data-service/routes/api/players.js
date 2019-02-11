const route = require('express').Router();
const db = require('../../db');

route.get('/', (req,res)=>{

    db.query("select * from playerpersonaldata where name like '%" + req.query.player_name + "%' limit 1",(err,data)=>{
        if(err){
            res.json({
                result:'not found.'
            })
        }
        else{
            
            res.status(200).json({
                result:"json from data service api",
                data:data
            })
            
        }
    })

})

module.exports = route;