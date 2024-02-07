const express = require("express");
const Posts = require("../models/posts");

const router = express.Router();

//save posts

router.post("/posts/save", async (req, res) => {

    const { topic , description , postCategory } = req.body;
    const newPosts = new Posts({

        topic,
        description,
        postCategory,

    });

    newPosts.save();

    return res.json({ success : true , message : 'successfull'});

});

//get posts

router.get('/posts', async(req,res) => {
   try{

    const test = await Posts.find();
    res.json({test});
   }catch(error){
    console.error ('error : ' ,error);
   }
});


//get a specific post

router.get("/post/:id",(req,res) =>{
    let postId = req.params.id;
    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts

router.put('/post/update/:id',(req,res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    );  
});

//delete post

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedPost
        });
    });
});

module.exports = router;

