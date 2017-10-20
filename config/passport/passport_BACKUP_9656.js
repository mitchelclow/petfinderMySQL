// passport.js contains passport strategies
// load bcrypt to secure passwords
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  // serialize user
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // deserialize user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.error, null);
      }
    });
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

      function(req, email, password, done) {
        var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
          // generateHash function ends
          };
          // Checking to see if the user exists and if not adds user with User.create
          User.findOne({
            where: {
              email: email
            }

          }).then(function(user) {
            if (user)
              {
                return done(null, false, {
                  message: 'That email is already taken'
                });
              } else {
                var userPassword = generateHash(password);
                var data =
                    {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };
                User.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
              };
            });
        // LocalStrategy signup ends
      }));

      //LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(

    {

        // by default, local strategy uses username and password, we will override with email

        usernameField: 'email',

        passwordField: 'password',

        passReqToCallback: true // allows us to pass back the entire request to the callback

    },


    function(req, email, password, done) {

        var User = user;
        // isValidPassword compares  the password entered with the bCrypt comparison method
        var isValidPassword = function(userpass, password) {

            return bCrypt.compareSync(password, userpass);

        }

        User.findOne({
            where: {
                email: email
<<<<<<< HEAD
              }

            }).then(function(user) {
              if (user)
                {
                  return done(null, false, {
                    message: 'That email is already taken'
                  });
                } else {
                  var userPassword = generateHash(password);
                  var data =
                      {
                          email: email,
                          password: userPassword,
                          firstname: req.body.firstname,
                          lastname: req.body.lastname
                      };
                  User.create(data).then(function(newUser, created) {
                      if (!newUser) {
                          return done(null, false);
                      }
                      if (newUser) {
                          return done(null, newUser);
                      }
                  });
                };
              });
        }));

  // serialize user
  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });

//   deserialize user
//   passport.deserializeUser(function(id, done) {
//     User.findById(id).then(function(user) {
//       if (user) {
//         done(null, user.get());
//       } else {
//         done(user.error, null);
//       }
//     });
//   )};
//
=======
            }
        }).then(function(user) {

            if (!user) {

                return done(null, false, {
                    message: 'Email does not exist'
                });

            }

            if (!isValidPassword(user.password, password)) {

                return done(null, false, {
                    message: 'Incorrect password.'
                });

            }


            var userinfo = user.get();
            return done(null, userinfo);


        }).catch(function(err) {

            console.log("Error:", err);

            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });

        });
            // LocalStrategy signin ends
          }));
>>>>>>> 3f8fb3e9c9e26541353cbdb53db620e28fcfd421
// module.exports ends
};
