import styled from "styled-components";
import { Nunito } from "next/font/google";

const nunito= Nunito({
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
    border: 1px solid var(--primary);
`;
export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    `;
