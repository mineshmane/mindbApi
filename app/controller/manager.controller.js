const userService = require('../services/manager.service');


exports.registration = (req, res ) => {
    try {

        console.log("in controller ", req.body);
        userService.registerService(req.body).then((result) => {
            console.log("error result success in cotroller",result);
            res.status(200).send(result);
        }).catch((err) => {
            console.log("eroor in controller",err);
            res.status(500).send(err)
        })
    } catch (error) {
        res.status(500).send(error)

    }


};

exports.login = (req, res) => {
    try {
        userService.loginService(req.body).then((response) => {
            res.send(response)
        }).catch(err => {
            res.send(err)
        })
    } catch (error) {
        res.send(error)

    }


}

exports.getAllUsers = (req, res) => {
    try {
        console.log("in controller ", req.body);
        userService.getUserService(req.body).then((result) => {
            console.log(result);
            res.status(200).send(result);
        }).catch((err) => {
            res.status(200).send(err)
        })
    } catch (error) {
        res.send(error)

    }


};

