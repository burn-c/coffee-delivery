import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

export const SelectCardGroup = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;
`

export const SelectCardItem = styled(ToggleGroup.Item)`
  display: flex;
  width: 178.667px;
  padding: 16px;
  align-items: center;
  gap: 1rem;

  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};

  font-size: ${(props) => props.theme.fontSizes['button-m']};
  line-height: ${(props) => props.theme.lineHeight.lg};

  svg {
    color: ${(props) => props.theme.colors.purple};
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &[data-state='on'] {
    border: 1px solid ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors['purple-light']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
