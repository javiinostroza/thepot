'use client'


type SelectorProps = {
    children?: React.ReactNode,
    id: string,
};

export default function TimeSelector({ children, id, } : SelectorProps) {
    // Corresponds to input type radio in HTML
    
    return (
        <label className="label">
            <input id={id} name="radio" type="radio"/>
            <span>
                {children}
            </span>
        </label>
    )
}