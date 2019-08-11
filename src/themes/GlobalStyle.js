import { createGlobalStyle } from 'styled-components';
import RobotoCondensedRegular from '../assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf';
import RobotoCondensedBold from '../assets/fonts/RobotoCondensed/RobotoCondensed-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
		font-family: 'Roboto Condensed';
		font-weight: normal;
		font-style: normal;
		src: url('${RobotoCondensedRegular}') format('truetype')
	}
  @font-face {
		font-family: 'Roboto Condensed';
		font-weight: bold;
		font-style: normal;
		src: url('${RobotoCondensedBold}') format('truetype')
  }
	*{
		box-sizing: border-box;
	}
  body {
  	font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyle;
