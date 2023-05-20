import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const criarShow = async (req, res) => {
    const show = await prisma.show.create({
        data: {
            nome: req.body.nome,
            status: req.body.status,
            perfil: {
                connect: {
                    id: req.body.perfil
            }
        },
            categoria: {
                connect: req.body.categorias
            }
        
}})


    res.json({
        data: show,
        msg: "Show criado com sucesso!"
    })
}

export const atualizarShow = async (req, res) => {
    const show = await prisma.show.update({
        where: {
            id: parseInt(req.params.showId)
        },
        data: {
            nome: req.body.nome,
            status: req.body.status,
            categoria: {
                connect: req.body.categorias
            }
        
}})


    res.json({
        data: show,
        msg: "Show atualizado com sucesso!"
    })
}

export const getShows = async (req, res) => {
    const shows = await prisma.show.findMany({
        include: {
            categoria: true
        }
    })

    res.json({
        data: shows,
        msg: "Shows encontrados com sucesso!"
    })

    
}

export const getShowPorId = async (req, res) => {
    const show = await prisma.show.findUnique({
        where: {
            id: parseInt(req.params.showId)
        },
        include: {
            categoria: true
        }
    })

    res.json({
        data: show,
        msg: "Show encontrado com sucesso!"
    })
}

export const deletarShow = async (req, res) => {
    const showDeletado = await prisma.show.delete({
        where: {
            id: parseInt(req.params.showId)

        }

        
    })

    res.json({
        msg: "Show deletado com sucesso!"
    })
}