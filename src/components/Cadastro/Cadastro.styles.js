import styled from "styled-components";

// export const Title = styled.div`
//   color: ${({ primary }) => (primary ? 'red' : 'green')};
//   background-color: ${({ primary }) => (primary ? 'blue' : 'black')};
// `;

export const Title = styled.div`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.main : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.main
  })}
`;

export const Botao = styled.button`
padding: 5px;
background-color: ${({theme}) => theme.colors.secondary.main};
cursor: pointer;
color: ${({theme}) =>theme.colors.primary.main};
border: none;
border-radius: 3px;
&:hover {
    background-color : ${({theme}) => theme.colors.secondary.dark};
    transsition : ease 0.5s;
}
`;