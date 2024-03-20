import { writeFile, unlink, readFile } from "fs/promises";
import { randomUUID } from 'crypto';
import { prisma as db } from '$lib/server/db';

export const uploadFile = async (file: File) => {
    const uuid = randomUUID();
    const path = `./files/${uuid}`;

    await writeFile(path, Buffer.from(await file.arrayBuffer()));
    
    await db.file.create({
        data: {
            name: file.name,
            size: file.size,
            createdAt: new Date(),
            path: "./",
            uuid,
        },
    })
}

export const downloadFile = (uuid: string) => {
};


export const deleteFile = async (uuid: string) => {
    const path = `./files/${uuid}`;

    await unlink(path);
    
    await db.file.delete({
        where: {uuid}
    })
};