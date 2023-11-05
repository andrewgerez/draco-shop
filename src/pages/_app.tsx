import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImage from '../assets/logo.png'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import { Bag } from "phosphor-react";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image 
          width={130}
          height={80}
          src={logoImage.src} 
          alt="" 
        />
        <button>
          <Bag size={24} />
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
