import { lzetta } from "../../../fonts"

type ButtonProps = {
    classes: string,
    children?: React.ReactNode,
};

export default function Button({ classes } : ButtonProps) {
    return (
        <div className={classes}>
            <div className={lzetta.className}>
                <p className="center-text">{}</p>
            </div>
        </div>
    )
}