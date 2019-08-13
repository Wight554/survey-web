import styled from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    &:not(:first-child) {
      margin-top: ${props => props.theme.padding2}px;
    }
  }
`;

export default LoginStyle;
