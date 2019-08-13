import styled from 'styled-components';

const MasterPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > * {
    padding: ${props => props.theme.padding1}px;
  }
`;

export default MasterPageStyle;
