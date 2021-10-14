const express = require('express');
const Authentication = require('../middleware/jwtService')
const router = express.Router();
const user = require('../controller/manager.controller');
const emp = require('../controller/employee.controller');

console.log(" router");
router.post('/manager/signup', user.registration);
router.post('/manager/login', user.login);



router.post('/emp/addemp', Authentication.auth, emp.addEmployee);
router.put('/emp/update', Authentication.auth, emp.UpdateEmployee);
router.delete('/emp/delete/:id', Authentication.auth, emp.deleteEmployee);


router.post('/emp/payment',Authentication.auth, emp.Payments);
router.get('/emp/getEmpList', Authentication.auth, emp.getEmployeeList);


module.exports = router
