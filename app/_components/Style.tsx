import styled from "styled-components";
import { Nunito } from "next/font/google";

interface Props {
    $imgUrl: string;

}
interface AccordionProps {
    hidden: boolean;
}
interface AvatarProps {
    hidden: boolean;
}

export const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});
/*Accordion*/
export const AccordionContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 48px;
    margin: 32px;
    max-width:546px;
    min-width:327px;
`
export const AccordionHeader = styled.div`
        font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: bold;  
        color: var(--color-foreground);
        display:flex;
        cursor:pointer;
        border-bottom: 1px solid var(--color-foreground);
        justify-content:space-between;

        `


export const AccordionContent = styled.div<AccordionProps>`
    display: ${AccordionProps => AccordionProps.hidden ? 'none' : 'block'};
    color: var(--color-foreground) !important;
    margin-top: 16px;
   

`
/*Avatar */
export const AvatarImage = styled.div<Props>`
    width:48px;
    height:48px;
    border-radius:50%;
    margin:0;
    background-image: url(${props => props.$imgUrl});
    background-size: cover;
    background-position: center;
    `
export const AvatarExpanded = styled.button`
    display:flex;
    align-items: center;
    justify-content:space-between;
    width:110px;
    padding: 10px 14px;
    overflow: hidden;
    background-color: var(--color-background);
    border-radius:8px;
    &:focus{
     background-color: var(--color-background-accent-focus);
    }
    
    `
export const ExpandArrowButton = styled.div<Props>`
    display:flex;
    justify-content:center;
    width: 24px !important;
    height: 24px !important;
    background-image: url(${props => props.$imgUrl});
    background-position: center;
    background-size: cover;
    margin-left: 10px;
    vertical-align: middle;
     
    `
export const ExpandPopOver = styled.div<AvatarProps>`
      display: ${AvatarProps => AvatarProps.hidden ? 'none' : 'block'};
    border: 1px solid var(--color-background);
    border-radius: 0px 8px 8px 8px;
    min-width:100px;
    max-width:300px;
    height: 50px;

    `

/* Buttons */
export const BotaoPrimary = styled.button`
background-color: var(--color-background-accent);
color: white;
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
font-weight: bold;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
padding: 0.5rem 1rem;
border-radius: 0.25rem;
`;
export const BotaoSecondary = styled.button`
background-color: white;
color: var(--color-background-accent);
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
padding: 0.5rem 1rem;
font-weight: bold;
border-radius: 0.25rem;
box-shadow: 0 2px 4px rgba(27, 18, 18, 0.3);
border: 2px solid var(--color-background-accent);
`;

/*Background */
export const Background = styled.div<Props>`
background-image: url(${props => props.$imgUrl});
background-size: cover;
background-position: center;
width: 100vw;
min-height: 100vh;
`;
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
background-color:var(--color-background);
width: 100vw;
height: 10%;

`;
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 1rem;
`;
export const H1 = styled.h1`
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
font-size: 2.3rem;
font-weight: bolder;
color: var(--color-background-accent);
margin: 1rem 0;
`;
export const H1Black = styled.h1`
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
font-size: 2.3rem;
font-weight: bolder;
color:#131313 !important;
margin: 1rem 0;
border-bottom: 1.6px solid var(--color-background-accent);
`;

export const Img = styled.img`
width: 50px;
height: 50px;
margin: 1rem;
`;
export const Link = styled.a`
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
color: var(--color-background-accent);
text-decoration: none;
margin: 0.5rem;
font-weight: bold;
`;
export const Card = styled.div`
display: flex;
margin-left: 30px;
width: 50%;
min-width:356px;
max-width:540px;
flex-wrap: wrap;
justify-content: flex-start;
align-content: flex-start
    `;

export const ContainerColumn = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
gap: 1rem;
`;
export const ContainerRow = styled.div`
display: flex;
flex-direction: row !important;
justify-content: space-between;
padding: 0 18px 0 0;
flex-wrap: wrap;
gap: 1rem;
`;
export const P = styled.p`
font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
color:#777;
font-size: 1.4rem;
font-weight: 600;
margin-bottom: 10px;
`;
export const Strong = styled.strong`
font-weight: bold;
color: var(--color-text-heading);
`;
export const RoundedCard = styled.div`
margin:0;
padding:0;
border-radius: 8px;
overflow:hidden;
width: 50%;
`
/* --- Variações de tamanho da fonte ---*/

export const Headlinexl = {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    fontWeight: "bold",
}

