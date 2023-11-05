import { X } from "phosphor-react";
import { BadgeItem, Bag, Container, Item, ItemList, Order } from "./styles";
import { useBagStore } from "../../store/bagStore";

export default function MyBag() {
  const { open, updateVisibility } = useBagStore(store => {
    return {
      open: store.open,
      updateVisibility: store.updateVisibility
    }
  })

  return (
    <>
      {open && (
        <Bag>
          <header>
            <button onClick={updateVisibility}>
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
      )}
    </>
  );
}