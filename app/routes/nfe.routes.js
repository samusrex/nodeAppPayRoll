module.exports = (app) =>{

    const nfe = require('../controllers/nfe.controllers.js')
    
    app.post('/nfe',nfe.create);
    app.get('/nfe',nfe.findAll);
    app.get('/nfe/:nfeId',nfe.findOne);
    app.put('/nfe/:nfeId',nfe.update);
    app.delete('/nfe/:nfeId',nfe.delete);
    
    }