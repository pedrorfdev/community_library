import { Router } from "express";
import bookRouters from "./book.routes.js";
import loanRouters from "./loan.routes.js";
import userRouters from "./user.routes.js";

const routers = Router();

routers.use("/users", userRouters);
routers.use("/books", bookRouters);
routers.use("/loans", loanRouters);

export { routers };
