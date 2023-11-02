import {
  ButtonIcon,
  ButtonPrimary,
  ButtonProps,
  ButtonSecundary,
} from './styles'

const ButtonVariantComponent = {
  primary: ButtonPrimary,
  secondary: ButtonSecundary,
  icon: ButtonIcon,
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  const ButtonVariant = ButtonVariantComponent[variant]

  return <ButtonVariant variant={variant}>{children}</ButtonVariant>
}
