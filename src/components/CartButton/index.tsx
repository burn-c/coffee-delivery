import { ShoppingCartSimple } from 'phosphor-react'

import { ButtonIconContainer } from './styles'

export default function CartButton() {
  const productAmount = 0

  return (
    <ButtonIconContainer>
      <ShoppingCartSimple />
      <div>{productAmount}</div>
    </ButtonIconContainer>
  )
}
