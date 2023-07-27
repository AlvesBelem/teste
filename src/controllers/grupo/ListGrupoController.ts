import { Request, Response } from "express";
import { ListGrupoService } from "../../services/ListGrupoService";

class ListGrupoController {
    async handle(req: Request, res: Response) {

        const listGrupoService = new ListGrupoService();

        const grupo = await listGrupoService.execute();

        return res.json(grupo);
    }
}

export { ListGrupoController };

