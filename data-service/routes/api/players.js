const route = require('express').Router();
const db = require('../../db');

route.get('/:player_name', (req,res)=>{

    db.query("select * from playerpersonaldata where name like '%" + req.params.player_name + "%' limit 1",(err,data)=>{
        if(err){
            res.json({
                result:'not found.'
            })
        }
        else{
            var player = data[0];
            if(player){

                db.query("select * from playerpersonaldata p inner join affiliations a on p.ID=a.ID \
                inner join stats s on p.ID=s.ID \
                inner join traits t on p.ID=t.ID \
                where p.ID=?;",[player.ID],(err,data)=>{

                    if(err){
                        res.json({
                            result:'not found.'
                        })
                    }
                    else{
                        if(data){
                            res.status(200).json({
                                result:"json from data service api",
                                data:data[0]
                            })
                        }
                        else{
                            res.json({
                                result:'not found.'
                            })
                        }

                    }
                })
            }
            else{
                res.json({
                    result:'not found.'
                })
            }

        }
    })

})

module.exports = route;