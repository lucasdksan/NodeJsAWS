import { Request, Response } from "express";
import { UploadImagesService } from "../services/UploadImagesService";

class UploadImagesController {
    async handle(req: Request, res: Response){
        const uploadImagesService = new UploadImagesService();
        const { file } = req;
    }
}

export { UploadImagesController };