import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    &:not(:first-child) {
      margin-top: ${props => props.theme.padding2}px;
    }
  }
`;

export default Form;
