import { Bag } from 'phosphor-react';
import { useBagStore } from '../../../store/bagStore';
import { BagButton } from './styles'
import { useEffect, useState } from 'react';

export const MyBagButton = () => {
  const [isClient, setIsClient] = useState(false)

  const { updateVisibility, bagItems } = useBagStore(store => {
    return {
      updateVisibility: store.updateVisibility,
      bagItems: store.bagItems
    }
  })

  const bagItemsQuantity = bagItems
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <BagButton
      onClick={bagItems.length > 0 && updateVisibility}
    >
      {isClient ? bagItems?.length > 0 && (
        <span>{bagItemsQuantity}</span>
      ) : null}
      <Bag size={24} />
    </BagButton>
  );
}
