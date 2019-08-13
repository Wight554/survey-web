import styled from 'styled-components';

const CopyrightStyle = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color1};
  border-top: 1px solid ${props => props.theme.color5};
  height: 50px;
  text-align: center;
  > * {
    padding: ${props => props.theme.padding2}px;
    line-height: ${props => 50 - props.theme.padding1 * 2}px;
  }
`;

export default CopyrightStyle;
