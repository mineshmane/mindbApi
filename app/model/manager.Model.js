const mongoose = require('mongoose');

const ManagerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'FirstName is required']
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

    password: {
        type: String,
        required: [true, 'password is required']
    },
   
    dob: {
        type: String,
        required: [true, 'dateof birth is required']
    },
   
    address: {
        type: String,
        required: [true, 'address is required']
    },
    company: {
        type: String,
        required: [true, 'company is required']
    }


}, {
    timestamps: true
});

// module.exports = mongoose.model('Moment', MomentSchema);
const Manager = mongoose.model('Manager', ManagerSchema);


exports.createMoment = (req) => {
    console.log(" data in model", req);
    return new Promise((resolve, reject) => {
        Manager.create(req).then((res) => {
            console.log("response after creating in model ", res);
            return resolve(res)
        }).catch((err) => {
            return reject(err)
        })
    })
};

// Retrieve and return all notes from the database.
exports.findAllUser = (req) => {
    return new Promise((resolve, reject) => {
        Manager.find().then(res => {
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
        Manager.findOne(req).then((response) => {
            return resolve(response)

        }).catch((error) => {
            return reject(error)
        })
    })


};

// Update a note identified by the noteId in the request
exports.findOneAndUpdate = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
