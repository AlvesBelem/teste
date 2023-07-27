import { Router } from "express";
import { ListGrupoController } from "./controllers/grupo/ListGrupoController";

const router = Router();

router.get('/grupo', new ListGrupoController().handle);


export { router };