const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    empId: {
        type: String,
        required: [true, 'empId is required'],
        unique: true

    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
  
    subscription:{
        type: String,
        required: [true, 'email is required'],
    }




}, {
    timestamps: true
});

const Payments = mongoose.model('Payments', PaymentSchema);

exports.StorePayment = (req) => {
    return new Promise((resolve, reject) => {
        Payments.create(req).then(res => {
            return resolve(res)
        }).catch(err => {
            return reject(err)
        })
    })
}