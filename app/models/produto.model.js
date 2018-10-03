const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({

    descricao:String,
    categoria : {type:String, enum:['games','informatica','eletronicos','smartphone'], default:['games']},
    cor:String,
    modelo: String,
    fabricante:String,
    Qtde:Number
    
},
{
    timestamps: true
}
);


module.exports = mongoose.model('Produto', ProdutoSchema);
