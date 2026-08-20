import Navbar from "../_components/Navbar";
import Link from "../_components/_Text/Link";
import NavContainer from "../_components/NavContainer";
import ButtonPrimary from "../_components/_Button/ButtonPrimary";
import BackgroundImage from "../_components/BackgroundPage";
import H1Component, { H1BlackComponent } from "../_components/_Text/H1";
import { Card, ContainerColumn, Strong, ContainerRow } from "../_components/Style";
import Paragraph from "../_components/_Text/Paragraph";
import ButtonSecondary from "../_components/_Button/ButtonSecondary";
import Image from "../_components/Image"
import Escolha from "../_images/Escolha-da-pessoa.png"
import { RoundedCard } from "../_components/Style";
export default function EscolhaDaPessoa() {
  return (
    <>
      <BackgroundImage>


        <Navbar>
          <NavContainer>
            <Link href="/Quem-somos" texto={"Quem somos"} />
            <Link href="/Ajuda" texto={"Ajuda"} />
            <ButtonPrimary texto={"Entrar"} />
          </NavContainer>
        </Navbar>
        <ContainerRow>
          <Card>
            <H1BlackComponent texto={"Junte-se à nossa comunidade"} />
            <Paragraph>Encontre atendimento clinico de qualidade ou entre para o time de profissionais da Lacrei Saúde</Paragraph>
            <ContainerColumn>
              <ButtonPrimary texto={"Buscar atendimento"} />
              <ButtonSecondary texto={"Oferecer atendimento"} />
            </ContainerColumn>
          </Card>
          <ContainerColumn>
            <RoundedCard>
              <Image foto={Escolha.src} alt={"Escolha da pessoa"} size={800} />
            </RoundedCard>
          </ContainerColumn>
        </ContainerRow>
      </BackgroundImage>
    </>
  );
}