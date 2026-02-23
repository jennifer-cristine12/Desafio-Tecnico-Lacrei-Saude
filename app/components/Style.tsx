import styled from "styled-components";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});


export const BotaoPrimary = styled.button`
    background-color: var(--primary);
    color: white;
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
    font-weight:bold;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    
`;
export const BotaoSecondary = styled.button`
    background-color: white;
    color: var(--primary);
    font-family: ${nunito.style.fontFamily}, Arial, Helvetica, sans-serif;
    padding: 0.5rem 1rem;
    font-weight:bold;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    border: 2px solid var(--primary);
`;
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    width: 100%;
    height:10%;
    position:fixed;
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
    color: var(--primary);
    margin: 1rem;
    `;
export const Img = styled.img`
    width: 50px;
    height: 50px;
    margin: 1rem;
    `;
