import {BotaoSecondary} from "../Style";
export default function ButtonSecondary({ texto }: { texto: string }) {
    return(
        <>
        <BotaoSecondary >
            {texto}
        </BotaoSecondary>
        </>
    )
}