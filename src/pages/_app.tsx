import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImage from '../assets/logo.png'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import { Bag } from "phosphor-react";
import MyBag from "../components/myBag"
import { useBagStore } from "../store/bagStore"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { updateVisibility } = useBagStore(store => {
    return {
      updateVisibility: store.updateVisibility
    }
  })

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
        <button onClick={updateVisibility}>
          <Bag size={24} />
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
