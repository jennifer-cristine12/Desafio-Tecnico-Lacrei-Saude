import Image from 'next/image'
import foto from '../public/foto.png' // Alternativa: importação direta

export default function Page(foto: string) {
  return (
    <Image
      src={foto} // Caminho relativo à pasta /public
      alt="Descrição da foto"
      width={500}
      height={300}
    />
  )
}
