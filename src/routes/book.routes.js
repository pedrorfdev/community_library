import { Router } from "express";
import bookController from "../controller/book.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  validate,
  validateBookId,
} from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router();

router.get("/", bookController.findAllBooksController);

router.use(authMiddleware);

router.post("/", validate(bookSchema), bookController.createBookController);

router.get("/:id", validateBookId, bookController.findBookByIdController);
router.get("/search", bookController.searchBookController);

router.patch("/:id", validateBookId, bookController.updateBookController);

router.delete("/:id", validateBookId, bookController.deleteBookController);

export default router;
