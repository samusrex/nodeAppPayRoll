const Payroll = require('../models/payroll.model.js');

exports.create = (req,res)=>{
	
	console.log(req.body);
	
	if(!req.body.numberDoc){
		
		return res.status(400).send({message:"Payroll can not be empty."});
	}
	
	const payroll = new Payroll
	({
	
        numberDoc: req.body.numberDoc,
        Descricao: req.body.Descricao,
        ValorDoc: req.body.ValorDoc,
        Vencimento: req.body.Vencimento,
        Entrada:req.body.Entrada
	
	});
	
	payroll.save()
	.then(data=>{	res.send(data);		})
	.catch(err=>{	res.status(500).send({	message: err.message	});
	});
		
};

exports.findAll = (req,res)=>{
	
	Payroll.find({},function(err,payrolls){
		
		if(err){
			return res.status(404).send({message:"Error Data"});
		}else{
			res.send(payrolls);
		}
	});
		
		
};
exports.findOne = (req,res)=>{
	
	console.log(req.params);
	
	Payroll.findById(req.params.payrollId,function(err,notes){
		if(err){
			return res.status(404).send({message:"Note not found with id:"+req.params.payrollId});
		}else{
			res.send(notes);
		}
	});
	
};
exports.update = (req,res)=>{
	
	 Payroll.findByIdAndUpdate(req.params.payrollId, {
       
        numberDoc: req.body.numberDoc,
        Descricao: req.body.Descricao,
        ValorDoc: req.body.ValorDoc,
        Vencimento: req.body.Vencimento,
        Entrada:req.body.Entrada


    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "P not found with id " + req.params.payrollId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "P not found with id " + req.params.payrollId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.payrollId
        });
    });
	
};
exports.delete = (req,rex)=>{
	
	Payroll.findOneAndRemove(req.params.payrollId,function(err){
		if(err){
			return res.status(500).send({message:"Error while trying to exclude"});
		}else{
			return res.status(200).send({message:"Note was removed with success"});
		}
	});
	
	
	
};
