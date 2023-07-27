import prisma from "../prisma";



class ListGrupoService {
    async execute() {
        const grupo = await prisma.grupo.findMany({

        })

        return grupo;
    }
}

export { ListGrupoService };