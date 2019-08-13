import styled from 'styled-components';

const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    &:not(:first-child) {
      margin-top: ${props => props.theme.padding3}px;
    }
  }
`;

export default InputContainerStyle;
