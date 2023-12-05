import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImage from '../assets/logo.png'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import MyBag from "../components/MyBag"
import { MyBagButton } from "../components/MyBag/MyBagButton"
import { useRouter } from "next/router"

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Container>
      <MyBag />

      <Header>
        <Image 
          width={130}
          height={80}
          src={logoImage.src}
          onClick={() => router.push('/')}
          alt="" 
        />
        <MyBagButton />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
