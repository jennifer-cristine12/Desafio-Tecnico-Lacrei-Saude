import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
         <h1>Loja de vestuário</h1>
   <Link href="/">Home</Link>
   <Link href="pages/tickets">Tickets</Link>
    </nav>
  );
}