import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import shirt1 from '../assets/shirts/1.svg'
import shirt2 from '../assets/shirts/2.svg'
import shirt3 from '../assets/shirts/3.svg'
import shirt4 from '../assets/shirts/4.svg'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
