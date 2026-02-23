import { Nav } from "../Style";
import { ReactNode } from "react";
import {Image} from "../Image/Image";
export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <>
    <Nav>
      
        {children}
  
    </Nav>
    </>
  );
}