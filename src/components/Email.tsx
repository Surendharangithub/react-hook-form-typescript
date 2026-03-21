import { Controller, useFormContext } from "react-hook-form"

const EmailTemplate = () => {

    const { control } = useFormContext();

    console.log('Email Component Rendering')

    return <div className="flex flex-col gap-2 w-full">
        <p className="text-white">Enter your mail id</p>
        <Controller
            name="email"
            control={control}
            render={({ field }) => {
                return (
                    <input type="text" {...field} className="bg-white text-black!" />
                )
            }}
        />
    </div>
}

export default EmailTemplate;