const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Manager Id required"]
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },

    dob: {
        type: String,
        required: [true, 'phone is required']
    },
    city: {
        type: String,
        required: [true, 'city is required']
    },
    phone: {
        type: String,
        required: [true, 'city is required']
    },
    empId: {
        type: Number,
        required: [true, 'empId is required'],
        unique: true
    },

}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', EmployeeSchema);




exports.createEmployee = (req) => {
    console.log(" data in model", req);
    return new Promise((resolve, reject) => {
        Employee.create(req).then((res) => {
            console.log("response after creating in model ", res);
            return resolve(res)
        }).catch((err) => {
            return reject(err)
        })
    })
};

// Retrieve and return all notes from the database.
exports.getAllEmployees = (req) => {
    return new Promise((resolve, reject) => {
        Employee.find().then(res => {
            console.log("user list in model ", res);
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })

    })

};

// Find a single note with a noteId
exports.findUser = (req) => {
    return new Promise((resolve, reject) => {
        Employee.findOne(req).then((response) => {
            return resolve(response)

        }).catch((error) => {
            return reject(error)
        })
    })


};
exports.UpdateEmployee = (req) => {

    return new Promise((resolve, reject) => {
        Employee.findByIdAndUpdate(req._id, req, { new: true }).then((result) => {
            console.log(result);
            resolve(result)
        }).catch((err) => {
            reject(err)
        })
    })


}

exports.delete = (req) => {
    return new Promise((resolve, reject) => {
        Employee.deleteOne(req).then(res => {
            return resolve(res)
        }).catch(err => {
            return reject(err)
        })
    })

}


