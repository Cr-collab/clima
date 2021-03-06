import styled from 'styled-components'

export const Container = styled.div`
  button.close {
    margin-bottom: 1rem;
    margin-left: auto;
    grid-column: 2;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;

  input {
    width: 14rem;
    height: 3rem;
    background: var(--background-sidebar);
    outline: none;
    border: 1px solid white;
    color: #616475;
    font-weight: 500;
    text-align: center;
    margin-right: 2rem;
    grid-column: 1;
  }

  button {
    width: 5.375rem;
    height: 3rem;
    background: #3c47e9;
    color: #e7e7eb;
    border: none;
    grid-column: 2;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
