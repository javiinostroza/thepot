'use client'


import { inter } from "../../../fonts"

type CardProps = {
    children?: React.ReactNode,
};

export default function WordCard({ children, } : CardProps) {
    
    return (
        <div className="word-card">
            <div className={inter.className}>
                <p className="center-text medium-text bold">{ children }</p>
            </div>
        </div>
    )
}