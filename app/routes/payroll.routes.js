module.exports = (appPayRoll) =>{

    const payroll = require('../controllers/payroll.controllers.js')
    
    appPayRoll.post('/payroll',payroll.create);
    appPayRoll.get('/payroll',payroll.findAll);
    appPayRoll.get('/payroll/:payrollId',payroll.findOne);
    appPayRoll.put('/payroll/:payrollId',payroll.update);
    appPayRoll.delete('/payroll/:payrollId',payroll.delete);
    
    }