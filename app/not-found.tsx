import React from 'react'
import Navbar from './_components/Navbar'
import NavContainer from './_components/NavContainer'
import ButtonPrimary from './_components/_Button/ButtonPrimary'
import Link from "./_components/_Text/Link";
import H1Component from './_components/_Text/H1';

export default function PrivatePage() {
    return (
        <>

            <Navbar>
                <NavContainer>
                    <Link href="/Quem-somos" texto={"Quem somos"} />
                    <Link href="/Ajuda" texto={"Ajuda"} />
                    <ButtonPrimary texto={"Entrar"} />
                </NavContainer>
            </Navbar>
            <H1Component texto={"Pagina Não Encontrada!"} />
            <Link href="/" texto={"Voltar para a página inicial"} />
        </>
    )
}
