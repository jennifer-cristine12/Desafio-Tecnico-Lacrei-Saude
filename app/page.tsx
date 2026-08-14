
import Link from "./_components/_Text/Link";
import H1Component from "./_components/_Text/H1";
import { ContainerColumn, ContainerRow, Strong, Card } from "./_components/Style";
import ButtonPrimary from "./_components/_Button/ButtonPrimary";
import Paragraph from "./_components/_Text/Paragraph";
import Navbar from "./_components/Navbar";
import NavContainer from "./_components/NavContainer";
import BackgroundImage from "./_components/BackgroundPage";
import bgHome from "./_images/bg-home.png"
import Accordion from "./_components/_Accordion/Accordion";
export default function Inicio() {
  return (
    <BackgroundImage $imgUrl={bgHome.src}>

      <Navbar>
        <NavContainer>
          <Link href="/Quem-somos" texto={"Quem somos"} />
          <Link href="/Ajuda" texto={"Ajuda"} />
          <ButtonPrimary texto={"Entrar"} />
        </NavContainer>
      </Navbar>
      <Card>
        <ContainerColumn>
          <H1Component texto={"Olá, você está na Lacrei Saúde!"} />
          <Paragraph>Conectamos pessoas <Strong>LGBTQIAPN+</Strong>com profissionais de saúde qualificados, proprcionando experiencias de cuidado seguras e inclusivas</Paragraph>
          <ContainerRow>
            <ButtonPrimary texto={"Para pacientes"} />
            <ButtonPrimary texto={"Para profissionais"} />
          </ContainerRow>
        </ContainerColumn>
      </Card>
      <Accordion HeaderText="Acordion ">
        <Paragraph>Accordion content goes here</Paragraph>
      </Accordion>


    </BackgroundImage>
  );
}