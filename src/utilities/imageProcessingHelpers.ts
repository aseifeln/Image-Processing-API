import sharp, { OutputInfo } from 'sharp';
import { existsSync } from 'fs';

// Resize an image's width and height using the 3rd party library sharp
const resize = async (
    fileName: string,
    width: number,
    height: number
): Promise<OutputInfo> => {
    try {
        return await sharp(`images/full/${fileName}.jpg`)
            .resize(width, height)
            .toFile(`images/thumb/${fileName}_${width}_${height}.jpg`);
    } catch (err) {
        throw new Error(`${err}`);
    }
};

// Checks if an image already exists
const isImageExist = (filePath: string): boolean => {
    return existsSync(filePath);
};

export { resize, isImageExist };
