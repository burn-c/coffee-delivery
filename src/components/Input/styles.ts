import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};

  &:has(input:focus) {
    border-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const InputComponent = styled.input`
  all: unset;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes['text-s']};
  color: ${(props) => props.theme.colors['base-text']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const OptionalInfo = styled.span`
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.fontSizes['text-xs']};
  font-style: italic;
`
