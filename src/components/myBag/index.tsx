import { X } from 'phosphor-react'
import { BadgeItem, Bag, Container, Item, ItemList, Order } from './styles'
import { useBagStore } from '../../store/bagStore'
import Image from 'next/image'
import { pluralFormatter } from '../../utils/pluralFormatter'

export default function MyBag() {
  const { open, updateVisibility, bagItems, removeFromBag} = useBagStore(store => {
    return {
      open: store.open,
      updateVisibility: store.updateVisibility,
      bagItems: store.bagItems,
      removeFromBag: store.removeFromBag
    }
  })

  const totalSum = bagItems.reduce((acc, product) => {
    const price = parseFloat(product.price.replace('R$', '').replace(',', '.'))
    return acc + price
  }, 0)

  const formattedTotalSum = totalSum.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <>
      {open && (
        <Bag variant={open ? 'open' : 'closed'}>
          <header>
            <button onClick={updateVisibility}>
              <X size={16} weight='bold' />
            </button>
          </header>

          <Container>
            <main>
              <strong>Sacola de compras</strong>

              <ItemList>
                {bagItems.map((product) => (
                  <Item key={product.id}>
                    <BadgeItem>
                      <Image
                        src={product.imageUrl}
                        width={94}
                        height={94}
                        alt=''
                      />
                    </BadgeItem>
                    <section>
                      <p>{product.name}</p>
                      <strong>{product.price}</strong>
                      <button onClick={() => removeFromBag(product.id)}>
                        Remover
                      </button>
                    </section>
                  </Item>
                ))}
              </ItemList>
            </main>

            <Order>
              <span>
                <p>Quantidade</p>
                <p>{pluralFormatter(bagItems.length, 'item', 'itens')}</p>
              </span>

              <span>
                <strong>Valor total</strong>
                <h4>{formattedTotalSum}</h4>
              </span>

              <button 
                disabled={bagItems.length === 0}
              >
                Finalizar compra
              </button>
            </Order>
          </Container>
        </Bag>
      )}
    </>
  );
}