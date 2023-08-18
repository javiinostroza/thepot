'use client'


import { inter } from "../../../fonts"

type CardProps = {
    children?: React.ReactNode,
};

export default function StageCard({ children, } : CardProps) {
    
    return (
        <div className="stage-card">
            <div className={inter.className}>
                <p className="center-text small-text bold">{ children }</p>
            </div>
        </div>
    )
}