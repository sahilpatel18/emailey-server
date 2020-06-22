const e = require("express");

if(process.env.NODE_ENV === 'production'){
//return prod keys
module.exports = require('./prod')
}else{
//return dev keys
module.exports = require('./dev')
}




// prod 
// mongodb+srv://myuser:TEI3hCLPUX9pJIZC@cluster0-t4bqb.mongodb.net/emaily-prod?retryWrites=true&w=majority
// myuser
// TEI3hCLPUX9pJIZC