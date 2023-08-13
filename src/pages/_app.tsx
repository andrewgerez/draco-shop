import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImage from '../assets/logo.png'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image 
          width={180}
          height={180}
          src={logoImage.src} 
          alt="" 
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
