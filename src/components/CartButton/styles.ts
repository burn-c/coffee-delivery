import styled from 'styled-components'

import { ButtonIcon } from '../Button/styles'

export const ButtonIconContainer = styled(ButtonIcon)`
  position: relative;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors['yellow-light']};
    filter: brightness(0.9);
  }

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -8.345px;
    top: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors['yellow-dark']};

    font-size: ${(props) => props.theme.fontSizes['button-m']};
    line-height: ${(props) => props.theme.lineHeight.md};
  }
`
