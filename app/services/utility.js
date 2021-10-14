const model = require('../model/manager.Model')
exports.alreadyExists = (req, res, next) => {
    let payload = {
        email: req.body.email
    }
    model.findUser(payload).then((data) => {
        if (data) {

            return res.status(409).send({
                message: `[${payload.email}] already exist`,
                statuscode: 409
            })

        } else return next()
    }).catch((err) => {
        return res.status(400).send({ message: "Something went wrong", statuscode: 400, err: err })

    })

}

