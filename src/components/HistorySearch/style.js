import styled from 'styled-components'

export const Container = styled.table`
  margin-top: 2rem;
  grid-column: 1 /3;

  tr {
    display: block;
    line-height: 4rem;
    font-weight: 500;
    color: var(--text-title);
    transition: border 0.4s;
    padding-left: 1rem;

    &:hover {
      border: 1px solid var(--text-title);
      cursor: pointer;
    }
  }
`
