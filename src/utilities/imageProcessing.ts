import sharp from 'sharp';


const resize = async (imageName: string, width: number, height: number): Promise<void> => {
    try{
     await sharp(`images/full/${imageName}.jpg`)
        .resize(width, height)
        .toFile(`images/thumb/${imageName}_${width}_${height}.jpg`)
    }catch(err){
        console.log(err)
    }
}


export default resize;