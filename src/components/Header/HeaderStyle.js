import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${props => props.theme.color1};
  border-bottom: 1px solid ${props => props.theme.color5};
  > * {
    padding: ${props => props.theme.padding2}px;
    text-align: center;
  }
  & Grid {
    height: ${props => 75 - props.theme.padding1 * 2}px;
  }
`;

export default HeaderStyle;
