import { Background } from "./Style";
import bgBlank from "../_images/bg-blank.png"
interface BackgroundImageProps {
    children: React.ReactNode;
    $imgUrl?: string;
}
export default function BackgroundImage({
    children,
    $imgUrl,
}: BackgroundImageProps) {
    return (
        <Background $imgUrl={$imgUrl || bgBlank.src}>
            {children}
        </Background >

    );
}