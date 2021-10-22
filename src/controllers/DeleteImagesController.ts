import { Request, Response } from "express";
import { DeleteImagesService } from "../services/DeleteImagesService";

class DeleteImagesController {
    async handle(req: Request, res: Response){
        const { filename } = req.params;
        const deleteImagesService = new DeleteImagesService();
        await deleteImagesService.execute(filename)
    }
}

export { DeleteImagesController };