import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: inline-flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};
`

export const InputComponent = styled.input`
  all: unset;
  max-width: 1.275rem;

  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const ButtonInput = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 1.257rem;
  height: 1.257rem;

  &:not(:disabled):active {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
