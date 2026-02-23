
import Image from 'next/image'
import H1Component from "./components/Text/H1";
import ButtonPrimary from "./components/Button/ButtonPrimary";
import ButtonSecondary from "./components/Button/ButtonSecondary";
import Navbar from "./components/Navbar/Navbar";
import NavContainer from "./components/Navbar/NavContainer";
export default function Inicio() {
  return (
    <div>

      <Navbar>
        <NavContainer>
        <Image
              src="/../public/file.svg" 
              alt="Logo da Lacrei Saúde"
              width={50}
              height={30}
            />
          <H1Component texto={"Lacrei Saúde"} />
        </NavContainer>
        
        <NavContainer>
          <ButtonPrimary texto={"Primary"} />
          <ButtonSecondary texto={"Secondary"} />
        </NavContainer>




      </Navbar>

    </div>
  );
}