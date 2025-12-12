import { z } from 'zod';
export const userSchema = z.object({
    name: z
        .string()
        .min(1, { message: "El nom és obligatori" })
        .min(3, { message: "Longitud mínima de 3 caràcters" }),
    lastname:
        z
            .string()
            .min(3, { message: "Longitud mínima de 3 caràcters" })
})
