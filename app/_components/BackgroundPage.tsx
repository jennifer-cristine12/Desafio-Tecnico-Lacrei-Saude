import { Background } from "./Style";
import bgHome from "../_images/bg-home.png"
interface BackgroundImageProps {
    children: React.ReactNode;
    $imgUrl?: string;
}
export default function BackgroundImage({
    children,
    $imgUrl,
}: BackgroundImageProps) {
    return (
        <Background $imgUrl={$imgUrl || bgHome.src}>
            {children}
        </Background >

    );
}