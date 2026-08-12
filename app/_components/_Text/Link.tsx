import { Link } from "../Style";
export default function LinkComponent({ texto, href }: { texto: string, href: string }) {
    return (
        <Link href={href}>{texto}</Link>
    );
}
