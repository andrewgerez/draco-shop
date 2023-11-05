import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImage from '../assets/logo.png'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import MyBag from "../components/MyBag"
import { MyBagButton } from "../components/MyBag/MyBagButton"

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <MyBag />

      <Header>
        <Image 
          width={130}
          height={80}
          src={logoImage.src} 
          alt="" 
        />
        <MyBagButton />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
