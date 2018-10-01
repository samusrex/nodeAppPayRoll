const Note = require('../models/note.model.js');

exports.create = (req,res)=>{
	
	console.log(req.body);
	
	if(!req.body.content){
		
		return res.status(400).send({message:"Note can not be empty."});
	}
	
	const note = new Note
	({
	
	title:req.body.title,
	content:req.body.content
	
	});
	
	note.save()
	.then(data=>{	res.send(data);		})
	.catch(err=>{	res.status(500).send({	message: err.message	});
	});
		
};

exports.findAll = (req,res)=>{
	
	Note.find({},function(err,notes){
		
		if(err){
			return res.status(404).send({message:"No Data"});
		}else{
			res.send(notes);
		}
	});
		
		
};
exports.findOne = (req,res)=>{
	
	console.log(req.params);
	
	Note.findById(req.params.noteId,function(err,notes){
		if(err){
			return res.status(404).send({message:"Note not found with id:"+req.params.noteId});
		}else{
			res.send(notes);
		}
	});
	
};
exports.update = (req,res)=>{
	
	 Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content ||"Untitle Content"
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
	
};
exports.delete = (req,rex)=>{
	
	Note.findOneAndRemove(req.params.noteId,function(err){
		if(err){
			return res.status(500).send({message:"Error while trying to exclude"});
		}else{
			return res.status(200).send({message:"Note was removed with success"});
		}
	});
	
	
	
};
