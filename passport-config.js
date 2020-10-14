const { authenticate } = require("passport");
const localStrategy = require("passport-local");


function initialize(passport){

    const authenticateUser = (nickname, password, done)=>{
if(nickname == null){
    return done(null, false, {massage: "NO user with this nickname!!!"})
}
    }


    passport.use(new localStrategy({ usernameField: "nickname" }), authenticateUser);
passport.serializeUser(nickname)

}