const Nfe = require('../models/nfe.model.js');

exports.create = (req,res)=>{
	
	console.log(req.body);
	
	if(!req.body){
		
		return res.status(400).send({message:"Note can not be empty."});
    }
    
    let InfoIde =req.body.ide;
    let InfoEmit=req.body.dEmit;

    
        
	const nfe = new Nfe
	({
	
    ide: InfoIde,
    dEmit:InfoEmit
		
    });
    
    console.log(nfe);
    	
	nfe.save()
	.then(data=>{	res.send(data);		})
	.catch(err=>{	res.status(500).send({	message: err.message	});
	});
		
};

exports.findAll = (req,res)=>{
        
	Nfe.find({},function(err,nfe){
        
        console.log(nfe);
             
		if(err){
			return res.status(404).send({message:"No Data"});
		}else{
			res.send(nfe);
		}
	});
		
		
};
exports.findOne = (req,res)=>{
	
	console.log(req.params);
	
    Nfe.findById(req.params.nfeId
        ,function(err,nfe){
		if(err){
            return res.status(404).send({message:"Note not found with id:"+req.params.nfeId
        });
		}else{
			res.send(nfe);
		}
	});
	
};
exports.update = (req,res)=>{
	
     Nfe.findByIdAndUpdate(req.params.nfeId
        , {
        
        title: req.body.title || "Untitled Note",
        content: req.body.content ||"Untitle Content"

    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.nfeId

            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.nfeId

            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.nfeId

        });
    });
	
};
exports.delete = (req,res)=>{
	
    Nfe.findOneAndRemove(req.params.nfeId
        ,function(err){
		if(err){
			return res.status(500).send({message:"Error while trying to exclude"});
		}else{
			return res.status(200).send({message:"Note was removed with success"});
		}
	});
	
	
	
};
