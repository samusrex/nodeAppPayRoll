const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);



const PayrollSchema = mongoose.Schema({
    
    numberDoc: String,
    Descricao: String,
    ValorDoc: {type:mongoose.Types.Currency},
    Vencimento: { type:Date, default:Date.now },
    Entrada:{ type:Date, default:Date.now }


}, {
    timestamps: true
});

module.exports = mongoose.model('Payroll', PayrollSchema);