const userService = require('../services/manager.service');


// Create and Save a new Note
exports.registration = (req, res) => {
    console.log("in controller ", req.body);
    userService.registerService(req.body).then((result) => {
        // return res.send(res)
        res.status(200).send(result);
    }).catch((err) => {
        res.status(200).send(err)
    })

};

exports.login = (req, res) => {
    userService.loginService(req.body).then((response) => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })

}

// Retrieve and return all notes from the database.
exports.getAllUsers = (req, res) => {
    console.log("in controller ", req.body);
    userService.getUserService(req.body).then((result) => {
        // return res.send(res)
        console.log(result);
        res.status(200).send(result);
    }).catch((err) => {
        res.status(200).send(err)
    })

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};