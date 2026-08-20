import { H1, H1Black } from "../Style";
export default function H1Component({ texto }: { texto: string }) {
    return (
        <>
            <H1>
                {texto}
            </H1>
        </>
    )
}
export function H1BlackComponent({ texto }: { texto: string }) {
    return (
        <>
            <H1Black>
                {texto}
            </H1Black>
        </>
    )
}