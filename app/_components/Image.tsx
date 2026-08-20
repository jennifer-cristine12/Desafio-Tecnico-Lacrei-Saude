import Image from 'next/image'
import foto from '../public/foto.png' // Alternativa: importação direta

export default function Page({ foto, alt, size }: { foto: string, alt: string, size: number }) {
  return (
    <Image
      src={foto} // Caminho relativo à pasta /public
      alt={alt}
      width={size}
      height={size - 200}
    />
  )
}
