const mongoose = require('mongoose');


var InfoGeral = new mongoose.Schema(

    {
        cUf: String,
        cNF:String,
        natOp:String,
        indPag:String,
        mod:String,
        serie:String,
        nNF:String,
        dEmi:{type:Date, default: Date.now},
        dSaiEnt: {type:Date, default: Date.now},
        tpNF:Number,
        cMunFG: String,
        tpImp:String,
        tpEmis:String,
        cDV:String,
        tpAmb:String,
        finNFe:String,
        procEmi:String,
        verProc:{ type:String, default:'NF-eletronica.com'}


    }

);
var InfoEmitente = new mongoose.Schema(

  { 
    CNPJ:String,
    xNome:String,
    xFant:String,
    
    enderEmit:{

        Lgr:String,
        nro:String,
        xCpl:String,
        xBairro:String,
        cMun:String,
        xMun:String,
        UF:String,
        CEP:String,
        cPais:String,
        xPais:String,
        fone:String


    },
    IE:String
  }

);


const NFESchema = mongoose.Schema({
   
    ide: InfoGeral,
    dEmit:InfoEmitente,
   

}, {
    timestamps: true
});

module.exports = mongoose.model('Nfe', NFESchema);