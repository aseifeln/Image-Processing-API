import sharp from 'sharp';
import {existsSync} from 'fs';

// Resize an image's width and height using the 3rd party library sharp
const resize = async (fileName: string, width: number, height: number): Promise<void> => {
    try{
     await sharp(`images/full/${fileName}.jpg`)
        .resize(width, height)
        .toFile(`images/thumb/${fileName}_${width}_${height}.jpg`)
    }catch(err){
        console.error(err)
    }
}

// Checks if an image already exists
const isImageExist = (filePath: string): boolean => {
    return existsSync(filePath);
}

export {resize, isImageExist};