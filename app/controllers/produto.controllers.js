const Produto = require('../models/produto.model.js');

exports.create = (req,res)=>{
	
	console.log(req.body);
	
	if(!req.body.content){
		
		return res.status(400).send({message:"Note can not be empty."});
	}
	
	const note = new Produto
	({
	
        descricao:req.body.descricao,
        categoria : req.body.categoria,
        cor:req.body.cor,
        modelo: req.body.modelo,
        fabricante:req.body.fabricante,
        Qtde:req.body.qtde
	
	});
	
	note.save()
	.then(data=>{	res.send(data);		})
	.catch(err=>{	res.status(500).send({	message: err.message	});
	});
		
};

exports.findAll = (req,res)=>{
	
	Produto.find({},function(err,notes){
		
		if(err){
			return res.status(404).send({message:"No Data"});
		}else{
			res.send(notes);
		}
	});
		
		
};
exports.findOne = (req,res)=>{
	
	console.log(req.params);
	
	Produto.findById(req.params.produtoId,function(err,notes){
		if(err){
			return res.status(404).send({message:"Note not found with id:"+req.params.produtoId});
		}else{
			res.send(notes);
		}
	});
	
};
exports.update = (req,res)=>{
	
	 Produto.findByIdAndUpdate(req.params.produtoId, {

        descricao:req.body.descricao,
        categoria : req.body.categoria,
        cor:req.body.cor,
        modelo: req.body.modelo,
        fabricante:req.body.fabricante,
        Qtde:req.body.qtde


    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.produtoId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.produtoId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.produtoId
        });
    });
	
};
exports.delete = (req,rex)=>{
	
	Produto.findOneAndRemove(req.params.produtoId,function(err){
		if(err){
			return res.status(500).send({message:"Error while trying to exclude"});
		}else{
			return res.status(200).send({message:"Note was removed with success"});
		}
	});
	
	
	
};
