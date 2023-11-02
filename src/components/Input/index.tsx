import { ElementRef, InputHTMLAttributes, forwardRef } from 'react'

import { InputComponent, InputContainer, OptionalInfo } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export const Input = forwardRef<ElementRef<typeof InputComponent>, InputProps>(
  ({ isOptional = false, ...rest }: InputProps, ref) => {
    return (
      <InputContainer>
        <InputComponent {...rest} ref={ref} />

        {isOptional ? <OptionalInfo>Opcional</OptionalInfo> : null}
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
