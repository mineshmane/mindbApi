
const service = require('../services/employee.service')
const strip = require('stripe')('sk_test_51Jji91SJgMg3LQvELrg0oWcsz6hND50ghQB8pBHf6ZQsTlvxf9J151Md1XnkfcNjqOHPc4ktBHh43JHJfR1moxDv00Rk4MAPDy')
const paymentModel = require('../model/payments.model')
exports.addEmployee = (req, res) => {

    try {
        console.log("in controller ", req.body);
        service.addEmployeeService(req.body).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(200).send(err)
        })
    } catch (error) {
        res.send(error)
    }


};

exports.UpdateEmployee = (req, res) => {
    try {
        console.log("in controller ", req.body);
        service.UpdateServvice(req.body).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(200).send(err)
        })
    } catch (error) {
        res.send(error)
    }
  

};

exports.deleteEmployee = (req, res) => {
    try {
        
        console.log("in controller ", req.body);
        service.deleteService(req.body).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err)
        })
    } catch (error) {
        res.send(error)
        
    }
   

};


exports.getEmployeeList = (req, res) => {
    try {
        
        var user_id = req.params['id']

        service.getEmployeeService(user_id).then((result) => {
            return res.status(200).send(result);
        }).catch((err) => {
            res.status(200).send(err)
        })
    } catch (error) {
        res.send(error)
        
    }

   
}

exports.Payments = (req, res) => {
    try {
        
        strip.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'abcd',
            source: req.body.token.id
        }, (err, charge) => {
            if (err) {
                return res.send(err)
            }
            else {
                paymentModel.StorePayment(req).then((result) => {
                    let msg = {
                        messgae: "payment successfull",
                        result: result
                    }
                    res.send(msg)
                }).catch((err) => {
                    res.send(err)
                })
            }
        })
    } catch (error) {
        
        res.send(error)
    }

    


}