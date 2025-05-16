require("dotenv").config()
const connectMongo = require("./database/db.ts")
const express = require("express")
const AccessryRoutes = require("./routes/accessories-routes")
const app = express()



connectMongo()
app.use(express.json())

app.use("/api/accessory/",AccessryRoutes)

app.listen(process.env.PORT,()=>{
    console.log("server is now running at port " + process.env.PORT);
    
})


export default express