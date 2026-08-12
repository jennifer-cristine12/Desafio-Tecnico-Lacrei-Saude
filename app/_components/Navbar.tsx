import { Nav } from "./Style";
import { ReactNode } from "react";
import NavContainer from "./NavContainer";
import Image from 'next/image'
import H1Component from "./_Text/H1";
export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav>
        <NavContainer>
          <Image
            src="/../public/file.svg"
            alt="Logo"
            width={30}
            height={30}
          />
          <H1Component texto={"Lacrei Saúde"} />
        </NavContainer>
        {children}

      </Nav>
    </>
  );
}