import { z } from "zod";


export const GENDER_OPTIONS = ['Male', 'Female'] as const;

const GenderSchema = z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(GENDER_OPTIONS, {
        message: "Gender is a mandatory field",
    })
);


export const FormSchema = z.object({
    name: z.coerce.number({ message: 'Please Enter valid input' }).min(1, "Please Enter Name"),
    email: z.string().default(""),
    gender: GenderSchema,
    fathername: z.string().optional(),
    mothername: z.string().optional()
}).superRefine((data, ctx) => {
    if (data.gender === 'Male' && !data.fathername) {
        ctx.addIssue({
            code: "custom",
            message: "Father Name is mandatory field",
            path: ['fathername']
        })
        return z.NEVER;
    }
    if (data.gender === 'Female' && !data.mothername) {
        ctx.addIssue({
            code: "custom",
            message: "Mother Name is mandatory field",
            path: ['mothername']
        })
    }
    console.log('dataFromSuperRefine', data)
})

export type InputFormType = z.input<typeof FormSchema>;
export type OutputFormType = z.output<typeof FormSchema>;
export type genderType = z.infer<typeof GenderSchema>;