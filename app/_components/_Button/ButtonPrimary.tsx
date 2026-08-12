import { BotaoPrimary } from "../Style";
export default function ButtonPrimary({ texto }: { texto: string }) {
    return (
        <>
            <BotaoPrimary >
                {texto}
            </BotaoPrimary>
        </>
    )
}