import { ElementRef, InputHTMLAttributes, forwardRef, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { ButtonInput, InputComponent, InputNumberContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputNumber = forwardRef<
  ElementRef<typeof InputComponent>,
  InputProps
>(({ ...rest }: InputProps, ref) => {
  const [value, setValue] = useState(0)

  function handleAdd() {
    setValue((prev) => prev + 1)
  }

  function handleSubtract() {
    setValue((prev) => prev - 1)
  }

  const emptyValue = value <= 0

  return (
    <InputNumberContainer>
      <ButtonInput onClick={handleSubtract} disabled={emptyValue}>
        <Minus />
      </ButtonInput>

      <InputComponent
        ref={ref}
        type="number"
        min={0}
        step={1}
        value={value}
        {...rest}
      />

      <ButtonInput onClick={handleAdd}>
        <Plus />
      </ButtonInput>
    </InputNumberContainer>
  )
})

InputNumber.displayName = 'InputNumber'
