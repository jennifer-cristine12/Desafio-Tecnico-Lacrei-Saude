import ButtonPrimary from "./components/Button/ButtonPrimary";
import ButtonSecondary from "./components/Button/ButtonSecondary";
export default function Inicio() {
  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>
      <p>Este é o início da minha aplicação Next.js.</p>
      <ButtonPrimary texto={"Clique aqui"}/>
      <ButtonSecondary texto={"Clique aqui"}/>
    </div>
  );
}