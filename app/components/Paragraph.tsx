import { Children } from "react";
import { P } from "./Style";
export default function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <P>{children}</P>
    );
}