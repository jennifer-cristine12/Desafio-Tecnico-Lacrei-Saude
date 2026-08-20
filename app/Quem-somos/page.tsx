import Link from "../_components/_Text/Link";
import ButtonPrimary from "../_components/_Button/ButtonPrimary";
import ButtonSecondary from "../_components/_Button/ButtonSecondary";
import { H1BlackComponent } from "../_components/_Text/H1";
import Paragraph from "../_components/_Text/Paragraph";
import BackgroundImage from "../_components/BackgroundPage";
import Navbar from "../_components/Navbar";
import NavContainer from "../_components/NavContainer";
import Quem_Somos from "../_images/Quem-somos.png"
import { ContainerRow, Card, ContainerColumn, RoundedCard } from "../_components/Style";
import Image from "../_components/Image"
export default function QuemSomos() {
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

                        <H1BlackComponent texto={"Atendimento qualificado, seguro e inclusivo"} />
                        <Paragraph>Acreditamos que, ao possibilitar a inclusão clinica da nossa comunidade, transformamos o mundo</Paragraph>
                        <Paragraph>Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+</Paragraph>
                        <Paragraph>Atuamos de forma ética e embassada nas regras e diretrizes estabelecidas pelos órgaos de classe e regulamentadores</Paragraph>

                    </Card>
                    <RoundedCard>
                        <Image foto={Quem_Somos.src} alt={"Quem somos"} size={700} />
                    </RoundedCard>
                </ContainerRow>
            </BackgroundImage>
        </>
    )
}