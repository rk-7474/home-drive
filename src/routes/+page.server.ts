import type { PageServerLoad, Actions } from "./$types";
import { prisma } from "$lib/server/db";

import { uploadFile } from "$lib/server/files";

export const load: PageServerLoad = async (event) => {
    const files = await prisma.file.findMany();

    console.log(files)
    return { files };
};

export const actions: Actions = {
    upload: async(event: any) => {
        const data = await event.request.formData();

        await Promise.all(Array.from(data.getAll("files") as File[]).map(async file=> {
            await uploadFile(file);
        }))
    
		return { success: true };
    }
};
