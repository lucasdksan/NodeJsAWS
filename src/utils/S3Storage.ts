import aws, { S3 } from "aws-sdk";
import mime from "mime";
import path from "path";
import fs from "fs";

import multerConfig from "../config/upload";

class S3Storage{
    private client: S3;
    constructor(){
        this.client = new aws.S3({
            region: "us-east-1",

        });
    }
    async saveFile(fileName: string): Promise<void>{
        const originalPath = path.resolve(multerConfig.directory,  fileName);
        const ContentType = mime.getType(originalPath);

        if(!ContentType){
            throw new Error("File not found");
        }
    
        const fileContent = await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket: "teste-lucas",
            Key: fileName,
            ACL: "public-read",
            Body: fileContent,
            ContentType,
        }).promise();

        await fs.promises.unlink(originalPath);
    }   
    async deleteFile(filename: string){
        this.client.deleteObject({
            Bucket:'teste-lucas',
            Key: filename
        }).promise();
    }
}

export { S3Storage };