import { X } from 'phosphor-react'
import { BadgeItem, Bag, Container, Item, ItemList, Order } from './styles'
import { useBagStore } from '../../store/bagStore'
import Image from 'next/image'
import { pluralFormatter } from '../../utils/pluralFormatter'
import { currencyFormatter } from '../../utils/currencyFormatter'
import { useState } from 'react'
import axios from 'axios'
import { Product } from '../../interfaces/product'

export default function MyBag() {
  const { open, updateVisibility, bagItems, removeFromBag } = useBagStore(store => {
    return {
      open: store.open,
      updateVisibility: store.updateVisibility,
      bagItems: store.bagItems,
      removeFromBag: store.removeFromBag
    }
  })
  const products: Product[] = Object.keys(bagItems).map(item => bagItems[item]);

  const getIndividualSum = (product) => {
    const price = parseFloat(product.price.replace('R$', '').replace(',', '.'))
    const sum = price * product.quantity;

    return currencyFormatter(sum)
  }

  const totalSum = bagItems.reduce((acc, product) => {
    const price = parseFloat(product.price.replace('R$', '').replace(',', '.'))
    const sum = price * product.quantity
    return acc + sum
  }, 0)

  const formattedTotalSum = currencyFormatter(totalSum)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: products,
      })

      const { checkoutUrl } = response.data;

      if (typeof window !== undefined) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

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
                      <strong>{getIndividualSum(product)}</strong>
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
                onClick={handleBuyProduct}
                disabled={isCreatingCheckoutSession || bagItems.length === 0}
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
