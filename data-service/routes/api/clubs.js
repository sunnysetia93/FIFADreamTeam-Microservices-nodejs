const route = require('express').Router();
const db = require('../../db');

route.get('/:club_name', (req,res)=>{

    db.query("select p.name from affiliations a inner join playerpersonaldata p on a.ID=p.ID where a.club like '%" + req.params.club_name + "%'",(err,data)=>{
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