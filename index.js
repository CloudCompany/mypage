const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./user");
const path = require("path")
const User = require("./models/userModel");
const bcrypt = require("bcrypt");

const initializePassport = require("./passport-config");
initializePassport(Passport)

app.use("/main", router);
app.use(express.json());
app.use("/login", express.static(path.join(__dirname, "public", "login.html")));
app.use("/register", express.static(path.join(__dirname, "public", "register.html")));
app.use("/main", express.static(path.join(__dirname, "public", "index.html")));
app.use(express.urlencoded({extended:false}));


console.log("hello world");

//Connect to DataBase
mongoose.connect("mongodb://localhost/userinfo", { useNewUrlParser: true,  useUnifiedTopology: true  });
const db = mongoose.connection;


app.post("/login", async (req, res)=>{

 
    
});




app.post("/register", async (req, res)=>{
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        name: req.body.name,
        nickname: req.body.nickname,
        password: passwordHash
    });
try {
    const result = await user.save();
    console.log(result);
    res.redirect("/login")

} catch (err){
    res.redirect("/login")
    return res.status(400).send("Xatolik")
}


})



db.on("error", (err)=>console.log("Error !!!"));
db.once("open", ()=>console.log("Connected to Database!!!"));


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`${PORT} running ...`));
