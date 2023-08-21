import { inter } from "../fonts"

type InputProps = {
    placeholder?: string,
    type: string,
    min?: number,
    max?: number,
    value?: number,
    onKeyDown?:  (event: React.KeyboardEvent) => void,
};

export default function Input({ placeholder, type, min, max, value, onKeyDown } : InputProps) {
    return (
        <div className={inter.className}>
            <input type={type} placeholder={placeholder} min={min} max={max} value={value} onKeyDown={onKeyDown} required />
        </div>
    )
}