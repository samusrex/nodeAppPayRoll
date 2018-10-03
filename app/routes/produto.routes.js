module.exports = (app) =>{

    const produto = require('../controllers/produto.controllers.js')
    
    app.post('/produto',produto.create);
    app.get('/produto',produto.findAll);
    app.get('/produto/:produtoId',produto.findOne);
    app.put('/produto/:produtoId',produto.update);
    app.delete('/produto/:produtoId',produto.delete);
    
    }