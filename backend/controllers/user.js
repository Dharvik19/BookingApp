const user = require('../models/user');

exports.postDetails=((req, res, next)=>{
    const {name, email, phone} = req.body;

    console.log(name,email,phone);

    user.create({name, email, phone})
    .then((response)=>{
        res.status(201).json({data : response})
    })
    .catch(err=>{
        console.log(err);
    })
});

exports.getDetails=((req, res, next)=>{
    user.findAll()
    .then(response=>{
        res.status(200).json({response});
    })
    .catch((err)=>{
        console.log(err);
    })
})

exports.delete = ((req, res, next)=>{
    const id = req.params.id;
    user.destroy({where: {id : id}})
    .then(response=>{
        res.status(200).json({msg : "Successful"});
    })
    .catch((err)=>{
        console.log(err);
    })
})