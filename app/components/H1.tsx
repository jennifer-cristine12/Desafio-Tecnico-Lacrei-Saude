import { H1 } from "./Style";
export default function H1Component({ texto }: { texto: string }) {
    return (
        <>
            <H1>
                {texto}
            </H1>
        </>
    )
}