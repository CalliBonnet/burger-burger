//step one 
const express = require("express"); 
const exphbs = require("express-handlebars")

const PORT = process.env.PORT || 3000; 

const app = express(); 

//step three 
app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars"); 


//step two 
app.listen(PORT, function() {
    console.log(`Server running on http://localhost:${PORT}`)
}); 

