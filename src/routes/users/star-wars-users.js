import express from 'express';
const router = express.Router();

router.get('/:emailId', async (req,res)=>{
    try{
        res.send('Success');
    } catch(err) {
        throw new Error(err);
    }
});

export default router;