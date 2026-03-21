import { Controller, useFormContext, useWatch } from "react-hook-form"

export default function SwitchField() {


    const { control } = useFormContext()

    const gender = useWatch({
        control: control,
        name: 'gender'
    })
    console.log('gender', gender)
    return <>
        {gender === 'Male' && <div className="flex flex-col gap-2 w-full">
            <p className="text-white">You've clicked Male Field</p>
            <Controller
                name="fathername"
                control={control}
                render={({ field }) => {
                    return (
                        <input type="text" {...field} className="bg-white text-black!" />
                    )
                }}
            />
        </div>}
        {gender === 'Female' && <div className="flex flex-col gap-2 w-full">
            <p className="text-white">You've clicked Female Field</p>
            <Controller
                name="mothername"
                control={control}
                render={({ field }) => {
                    return (
                        <input type="text" {...field} className="bg-white text-black!" />
                    )
                }}
            />
        </div>}

    </>
}