const express = require('express');
const app = express();

const GraphQLHttp = require('express-graphql');
const schema = require('./schema/schema')


app.use('/graphql',GraphQLHttp({
    schema,
    graphiql:true
}));


app.listen(4000,()=>{
    console.log("serve is running at port 4000");
    
})