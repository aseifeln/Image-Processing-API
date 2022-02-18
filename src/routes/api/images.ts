import express from 'express';
import {resize, isImageExist} from '../../utilities/imageProcessingHelpers';
import {query, validationResult} from 'express-validator'
const images = express.Router();

// @route   GET /api/images?filename={filename}&width={width}&height={height}
// @desc    GET resized image given a specific width and height
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
    const resizedImgFilePath = `images/thumb/${imgFileName}_${imgWidth}_${imgHeight}.jpg`;
    const originalImgFilePath = `images/full/${imgFileName}.jpg`;
    if(!isImageExist(originalImgFilePath)){
        res.status(404).json({error: "Image does not exist"});
    }else if(isImageExist(resizedImgFilePath)){
        //If the image already exists send the saved version
        res.status(200).sendFile(resizedImgFilePath, {root: '.'});
    }else{
        try{
            await resize(imgFileName, imgWidth, imgHeight);
            res.status(200).sendFile(resizedImgFilePath, {root: '.'});
        }catch(err){
            console.log(err);
        }
    }
})

export default images;