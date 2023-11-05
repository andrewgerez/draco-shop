import { X } from "phosphor-react";
import { BadgeItem, Bag, Container, Item, ItemList, Order } from "./styles";

export default function MyBag() {
  return (
    <Bag>
      <header>
        <button>
          <X size={16} weight="bold" />
        </button>
      </header>

      <Container>
        <main>
          <strong>Sacola de compras</strong>

          <ItemList>
            <Item>
              <BadgeItem />
              <section>
                <p>Camiseta de teste</p>
                <strong>R$ 59,90</strong>
                <button>Remover</button>
              </section>
            </Item>
          </ItemList>
        </main>

        <Order>
          <span>
            <p>Quantidade</p>
            <p>3 itens</p>
          </span>

          <span>
            <strong>Valor total</strong>
            <h4>R$ 270,00</h4>
          </span>

          <button>Finalizar compra</button>
        </Order>
      </Container>
    </Bag>
  );
}