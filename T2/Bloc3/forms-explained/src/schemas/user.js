import { z } from 'zod';
export const userSchema = z.object({
    name: z
        .string().nonempty({ message: "El nom és obligatori" })
        .min(3, { message: "Longitud mínima de 3 caràcters" }),
    lastname:
        z
            .string()
            .min(3, { message: "Longitud mínima de 3 caràcters" })
})
