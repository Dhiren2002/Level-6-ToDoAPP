const router = require ('../routes/avatars');
const utilities = require('../utilities/utility');
const fs = require ('fs');
const path = require('path');
const db = require('../models');
const Avatar = db.avatar;




getAll = async (req, res) =>{
    const avatar = await Avatar.findAll();

    try{

    if(avatar==null || avatar.length==0){
        throw new Error("Unable to find Avatars");
        }
             res.status(200).json(avatar);
        }
        catch(error){
        utilities.formatErrorResponse(res,400,error.message);
        }
    }


    getById = async (req, res) =>{
        const id =req.params.id;
        console.log(id)
        try{
            const avatar = await Avatar.findByPk(id);
            if(avatar==null || avatar.length==0){
                throw new Error("Unable to find Avatar with id " + id);
            }
        res.status(200).json(avatar);
        }
        catch(error){
            utilities.formatErrorResponse(res,400,error.message);
        }
   }

   update = async (req, res) =>{
        const id =req.body.id;
        console.log(req.body)
        const avatar = {
            name: req.body.name,
            image: path.join ('/public/images',req.file.filename)
        };
   
        try{
            if (id==null || avatar.name==null || avatar.image==null){
                throw new Error("Missing essential fields");
            }
        await Avatar.update(avatar,
            {where: { id: id }}
        );
        res.status(200).json(avatar);
        }
        catch (error){
            utilities.formatErrorResponse(res,400,error.message);
            await fs.promises.unlink(req.file.path);
            }
    }

module.exports = {getAll, getById, update};