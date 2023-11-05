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

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <BagButton onClick={updateVisibility}>
      {isClient ? bagItems?.length > 0 && (
        <span>{bagItems?.length}</span>
      ) : null}
      <Bag size={24} />
    </BagButton>
  );
}