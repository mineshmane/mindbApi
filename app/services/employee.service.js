const model = require('../model/employee.model')

exports.addEmployeeService = (req) => {

    let reqPayload = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        dob: req.dob,
        city: req.city,
        phone: req.phone,
        empId: req.empId,
        managerId: req.data.id


    }
    return model.createEmployee(reqPayload).then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        return err
    })

};


exports.getEmployeeService = (req) => {
    var response = {}
    return model.getAllEmployees(req).then((res) => {

        response.message = "UserLis retrived successfull"
        response.success = true,
            response.data = res,
            response.status = 200
        console.log(res);
        return response
    }).catch((err) => {
        return err
    })

};

exports.deleteService = (req) => {
    console.log(req);
    return model.delete(req).then((result) => {
        return result
    }).catch(err => { return err })
}

exports.UpdateServvice = (req) => {
    return model.UpdateEmployee(req).then((res) => {
        return res
    }).catch((err) => {
        return err
    })



}