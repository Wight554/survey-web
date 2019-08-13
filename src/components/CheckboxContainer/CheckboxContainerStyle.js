import styled from 'styled-components';

const CheckboxContainerStyle = styled.div`
  > * {
    &:not(:first-child) {
      margin-top: ${props => props.theme.padding3}px;
    }
  }
`;

export default CheckboxContainerStyle;
