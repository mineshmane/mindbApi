var jwt = require('jsonwebtoken');


exports.auth = (req, res, next) => {
    let token = req.headers['authorization']
     console.log(" tokemn=====>>>>>>",token);
     
     jwt.verify(token, 'privateKey', function (err, decoded) {
          if (err) {
               // console.log(err);
               return res.status(401).send({ message: 'Not Authenticated' });
          } else {
               // console.log('decoded data', decoded);
               req.body['data'] = decoded;
               // console.log(req.body);
               req.token = decoded;
               next();
          }
     });

},

    exports.generateToken = (obj) => {
        console.log(obj);
        return new Promise((resolve, reject) => {
            // var token = jwt.sign(obj, config.secretKey)

            jwt.sign(obj, "privateKey", function (err, token) {
                if (err) {
                    reject(err)
                } else {
                    resolve(token)

                }
                console.log(token);
            });

        })


    }
