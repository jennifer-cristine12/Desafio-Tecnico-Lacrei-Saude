
import Link from "./components/Text/Link";
import H1Component from "./components/Text/H1";
import {ContainerColumn, ContainerRow, Strong, Card} from "./components/Style";
import ButtonPrimary from "./components/Button/ButtonPrimary";
import Paragraph from "./components/Text/Paragraph";
import Navbar from "./components/Navbar/Navbar";
import NavContainer from "./components/Navbar/NavContainer";
import BackgroundImage from "./components/BackgroundPage/BackgroundPage";
export default function Inicio() {
  return (
    <BackgroundImage >

      <Navbar>
        <NavContainer>
          <Link href="/Quem-somos" texto={"Quem somos"} />
          <Link href="/" texto={"Ajuda"} />
          <ButtonPrimary texto={"Entrar"} />
        </NavContainer>
      </Navbar>
      <Card>

<ContainerColumn>
 <H1Component texto={"Olá, você está na Lacrei Saúde"} />
<Paragraph>Conectamos pessoas <Strong>LGBTQIAPN+</Strong>com profissionais de saúde qualificados, proprcionando experiencias de cuidado seguras e inclusivas</Paragraph>
<ContainerRow>
<ButtonPrimary texto={"Para pacientes"} />
<ButtonPrimary texto={"Para profissionais"} />
</ContainerRow>
</ContainerColumn>
      </Card>
     
      
    </BackgroundImage>
  );
}