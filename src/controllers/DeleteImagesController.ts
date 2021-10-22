import { Request, Response } from "express";
import { DeleteImagesService } from "../services/DeleteImagesService";

class DeleteImagesController {
    async handle(req: Request, res: Response){
        const deleteImagesService = new DeleteImagesService();
    }
}

export { DeleteImagesController };