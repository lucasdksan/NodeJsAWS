import { S3Storage } from "../utils/S3Storage";

class  UploadImagesService{
    async execute(file: Express.Multer.File){
        const s3Storage = new S3Storage();

        await s3Storage.saveFile(file.filename);
    }
}

export { UploadImagesService };