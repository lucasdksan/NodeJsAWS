import { Router } from "express";
import multer from "multer";

import { UploadImagesController } from "./controllers/UploadImagesController";
import { DeleteImagesController } from "./controllers/DeleteImagesController";
import multerConfig from "./config/upload";

const routes = Router();
const upload = multer(multerConfig);

const uploadImagesController = new UploadImagesController();
const deleteImagesController = new DeleteImagesController();

routes.post("/uploadFile", upload.single("image"), uploadImagesController.handle);
routes.delete("/:filename", deleteImagesController.handle);

export { routes };