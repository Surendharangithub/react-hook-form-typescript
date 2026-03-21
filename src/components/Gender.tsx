import { Controller, useFormContext } from "react-hook-form"
import { GENDER_OPTIONS } from "../schemas"

export default function Gender() {

    const { control } = useFormContext();

    return <div className="flex flex-col gap-2 w-full">
        <p className="text-white">Select Your Gender</p>
        <Controller
            name="gender"
            control={control}
            render={({ field }) => {
                return (
                    <select {...field} className="bg-white text-black!">
                        <option value="" disabled className="text-black!">Select gender</option>
                        {GENDER_OPTIONS.map((option, index) => {
                            return (
                                <option value={option} key={index} className="text-black!">{option}</option>
                            )
                        })}

                    </select>
                )
            }}
        />

    </div>
}