import { FormProvider, useForm, type FieldErrors } from "react-hook-form";
import { FormSchema, type genderType, type InputFormType, type OutputFormType } from "../schemas";
import Name from "./Name";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Gender from "./Gender";
import EmailTemplate from "./Email";
import SwitchField from "./Switch";

const Form = () => {
    const methods = useForm<InputFormType, object, OutputFormType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            gender: '' as genderType
        }
    });


    const submitHandler = (data: OutputFormType) => {
        console.log('SubmitHander', data)
    }

    const errorHandler = (errors: FieldErrors<InputFormType>) => {
        console.log('ERrors', errors)
        const errorMessages = Object.values(errors)
            .map(error => `• ${error?.message}`)
            .join('\n') // 👈 join with newline

        toast.error(errorMessages, {
            style: {
                whiteSpace: 'pre-line', // 👈 enables newline rendering
            },
            duration: 4000
        })


    }


    return <FormProvider {...methods}>
        <div className="min-h-screen bg-black flex items-center justify-center w-full">
            <form onSubmit={methods.handleSubmit(submitHandler, errorHandler)} className="bg-linear-to-r from-slate-800 to-slate-700/20 px-10 py-5 rounded-lg">
                <div className="flex flex-col items-center justify-center **:text-white space-y-5">
                    <div className="text-lg font-bold">React Hook Form + Zod Validations</div>
                    <Name />
                    <EmailTemplate />
                    <Gender />
                    <SwitchField />
                    <button className="cursor-pointer px-2 py-2 w-full bg-blue-400 rounded-md" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </FormProvider>
}

export default Form;