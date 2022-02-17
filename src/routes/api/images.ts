import express from 'express';
import resize from '../../utilities/imageProcessing';
import {query, validationResult} from 'express-validator'
const images = express.Router();

images.get('/', 
    //filename must exist and be a string
    query('filename', 'Image filename is invalid or not provided').exists().not().isInt(),
    //image width must exist and be an integer
    query('width', 'Image width is invalid or not provided').exists().isInt(),
    //image height must exist and be an integer
    query('height', 'Image height is invalid or not provided').exists().isInt(),
    async (req: express.Request, res: express.Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {filename, width, height} = req.query;
    const imgFileName = String(filename);
    const imgWidth = Number(width);
    const imgHeight = Number(height);
    
    try{
        await resize(imgFileName, imgWidth, imgHeight);
        res.status(200).sendFile(`images/thumb/${imgFileName}_${imgWidth}_${imgHeight}.jpg`, {root: '.'})
    }catch(err){
        console.log(err)
    }
    
})

export default images;