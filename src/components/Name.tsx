import { Controller, useFormContext } from 'react-hook-form'

const Name = () => {

    const { control } = useFormContext();

    return (
        <div className="flex flex-col gap-2 w-full">
            <p className="text-white">Enter your name</p>
            <Controller
                name="name"
                control={control}
                render={({ field }) => {
                    return (
                        <input type="text" {...field} className="bg-white text-black!" />
                    )
                }}
            />
        </div>
    )
}

export default Name