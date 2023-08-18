import { inter } from "../../../fonts"

type InputProps = {
    placeholder?: string,
    type: string,
};

export default function Input({ placeholder, type } : InputProps) {
    return (
        <div className={inter.className}>
            <input className={type} type={type} placeholder={placeholder} required />
        </div>
    )
}