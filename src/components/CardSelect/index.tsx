import { Bank, CreditCard, Money } from 'phosphor-react'

import { SelectCardGroup, SelectCardItem } from './styles'

const PAYMENT_TYPE = [
  {
    label: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard />,
    value: 'credit',
  },
  {
    label: 'CARTÃO Débito',
    icon: <Bank />,
    value: 'debit',
  },
  {
    label: 'DINHEIRO',
    icon: <Money />,
    value: 'money',
  },
]

export default function CardSelect() {
  return (
    <SelectCardGroup type="single">
      {PAYMENT_TYPE.map((method) => {
        return (
          <SelectCardItem
            key={`payment-select-${method.value}`}
            value={method.value}
          >
            {method.icon}
            {method.label}
          </SelectCardItem>
        )
      })}
    </SelectCardGroup>
  )
}
