'use client'


import { lzetta } from "../../../fonts"

type ButtonProps = {
    classes: string,
    children?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ classes, children, onClick, } : ButtonProps) {
    
    return (
        <button className={classes} onClick={onClick}>
            <div className={lzetta.className}>
                <p className="center-text">{ children }</p>
            </div>
        </button>
    )
}