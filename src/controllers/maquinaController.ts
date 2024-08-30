import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from 'zod';

const prisma = new PrismaClient();

const idSchema = z.object({
    maquinaId: z.string().transform(val => parseInt(val, 10)).refine(val => !isNaN(val) && val > 0, {
    message: "ID deve ser um número inteiro positivo",
    }),
});

const maquinaSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
});

export const getTodasMaquinas = async(req: Request, res: Response) => {
    try {
        const maquinas = await prisma.maquinas.findMany();
        res.json(maquinas);
    } catch (err: unknown) {
        if(err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Um erro desconhecido ocorreu!'})
        }
    }
};

export const getMaquinaPorId = async(req: Request, res: Response) => {
    try {
        const { maquinaId } = idSchema.parse(req.params);
        const maquina = await prisma.maquinas.findUnique({
            where: { id: maquinaId }
        });
        if(maquina){
            res.json(maquina)
        } else {
            res.status(404).json({ message: 'Maquina não encontrada'})
        }
    } catch (err: unknown){
        if(err instanceof Error){
            res.status(500).json({ error: err.message })
        } else {
            res.status(500).json({ error: 'Um erro desconhecido ocorreu!' })
        }
    }
};

export const postMaquina = async(req: Request, res: Response) => {
    const { name } = maquinaSchema.parse(req.body);
    const image = req.file?.buffer;
    try {
        if(!name || !image){
            return res.status(400).json({ error: 'Todos os campos precisam ser preenchidos! ' });
        }
        const maquina = await prisma.maquinas.create({
            data: {
                name,
                image,
            },
        });
        res.status(201).json(maquina);
    } catch (err: unknown){
        if(err instanceof Error){
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Um erro desconhecido ocorreu!'});
        }
    }
};

export const putMaquinaPorId = async (req: Request, res: Response) => {
    try {
        const { maquinaId } = idSchema.parse(req.params);
        const { name } = maquinaSchema.pick({ name: true }).parse(req.body);

        const data: { name?: string; image?: Buffer } = {
            name: name || undefined,
        };

        if(req.file){
            data.image = req.file.buffer;
        };

        const maquina = await prisma.maquinas.update({
            where: { id: maquinaId },
            data,
        });
        res.json(maquina);
    } catch (err: unknown){
        if(err instanceof Error){
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Um erro desconhecido ocorreu!' });
        }
    }
};

export const deleteMaquinaPorId = async (req: Request, res: Response) => {
    try {
        const { maquinaId } = idSchema.parse(req.params);
        await prisma.maquinas.delete({
            where: { id: maquinaId },
        });
        res.status(204).send();
    } catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Um erro desconhecido ocorreu!' });
        }
    }
};
