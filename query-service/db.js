const Sequelize = require('sequelize');
const DB_Info   = require('./config').DB_Info;

const db = new Sequelize('fifadreamteam',DB_Info.username,DB_Info.password,
{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0
    },
    insecureAuth : true
})

const User = db.define('users',{
    id :{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

const Token = db.define('tokens',{
    id :{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    token_no:{
        type:Sequelize.STRING,
        unique:true,
        index:true
    }
})

User.hasMany(Token);
Token.belongsTo(User);

async function dbRefresh()
{
    try
    {
        await db.authenticate();
        await db.sync();
        // await User.findOrCreate({where:{username:'user'},defaults:{name:'Sunny Setia',password:'password',contact:'9871236381'}})
        // await Cart.findOrCreate({where:{userId:1},defaults:{id:1,total:0}})
    }
    catch(err)
    {
        console.log(err);
    }
}

dbRefresh();

module.exports = {
    User,Token
}

