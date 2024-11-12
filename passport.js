import passport from 'passport';
import { jobseekerModel } from './model/userModel/jobseekerModel.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
dotenv.config();
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID, // Your Credentials here.
    clientSecret:process.env.GOOGLE_CLIENT_SECRET, // Your Credentials here.
    callbackURL:"http://localhost:8080/auth/google/callback",
    passReqToCallback:true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    // Pass the profile to your signIn function for processing
    try {
      const user = await jobseekerModel.signIn(profile);
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

passport.serializeUser((user , done) => {
  done(null , user);
})
passport.deserializeUser(function(user, done) {
  done(null, user);
});
export default passport;