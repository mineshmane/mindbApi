const model = require('../model/manager.Model');

const JWT = require('../middleware/jwtService')
exports.registerService = (req) => {

    let reqPayload = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: req.password,
        dob: req.dob,
        address: req.address,
        company:req.company


    }
    return model.createMoment(reqPayload).then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        return err
    })

};

exports.getUserService = (req, res) => {
    return model.findAllUser(req).then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        return err
    })

};

exports.loginService = (req, res) => {
    console.log(req.password);
    let response = {}

    let payload = {
        email: req.email
    }
    console.log(payload);
    return model.findUser(payload).then((data) => {

        console.log(data);
        if (data) {
            console.log(data);
            console.log(req.password);
            if (req.password == data.password) {
                let payload = { email: data.email, id: data.id }
              return  JWT.generateToken(payload).then(resultToken => {
                    response.message = "loggin successfull"
                    response.success = true,
                        response.data = data,
                        response.token = resultToken
                    console.log("logged in successfullay",resultToken);

                    return response
                }).catch(err => {
                    console.log("not genrated ",resultToken);

                    response.message = "token issue !not genrated "
                    response.success = false,
                        response.data = err
                    return response

                })


            } else {
                response.message = "password missmatched"
                response.success = false,
                    response.data = data
                return response
            }
        } else {
            response.message = "user not found"
            response.success = false,
                response.data = ''
            return response

        }
    }).catch((Err) => {
        return Err
    })




};