import styled from "styled-components";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});


export const BotaoPrimary = styled.button`
    background-color: var(--color-background-accent);
    color: white;
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
    font-weight:bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    
`;
export const BotaoSecondary = styled.button`
    background-color: white;
    color: var(--color-background-accent);
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
    padding: 0.5rem 1rem;
    font-weight:bold;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(27, 18, 18, 0.3);
    border: 2px solid var(--color-background-accent);
`;
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    width: 100vw;
    height:10%;
 
    `;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    `;
export const H1 = styled.h1`
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans
    serif;
    font-size: 2rem;
    font-weight:bolder;
    color: var(--color-background-accent);
    margin-top: 1rem;
    `;
export const Img = styled.img`
    width: 50px;
    height: 50px;
    margin: 1rem;
    `;
export const Link = styled.a`
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans
    serif;
    color: var(--color-background-accent);
    text-decoration: none;
    margin: 0.5rem;
    font-weight:bold;
    `;
    export const Card = styled.div`
    display:flex;
    margin-left:30px;
    width:30%;
    flex-wrap:wrap;
    justify-content:flex-start;
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
    align-itens-flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    `;
export const P = styled.p`
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans
    serif;
    color:#777;
    font-size: 0.8rem;
    font-weight:600;
    `;
export const Strong = styled.strong`
    font-weight: bold;
    color: #000;
    `;

/* --- Variações de tamanho da fonte ---*/

export const Headlinexl = {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    fontWeight: "bold",
}
export const Inicio = styled.div`
background-image: url('./Image/bg-inicio.png');
background-size: cover;
background-position: center;
width: 100vw;
height:100%;
`;