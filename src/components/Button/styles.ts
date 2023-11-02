import { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonVariants = 'primary' | 'secondary' | 'icon'

export interface ButtonProps {
  variant?: ButtonVariants
  children?: string | ReactNode
}

export const ButtonPrimary = styled.button<ButtonProps>`
  display: flex;
  height: 46px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['button-g']};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const ButtonSecundary = styled(ButtonPrimary)`
  height: 32px;
  padding: 0px 8px;

  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSizes['button-m']};
  font-weight: 400;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
export const ButtonIcon = styled(ButtonPrimary)`
  padding: 8px;

  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['base-text']};

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`
