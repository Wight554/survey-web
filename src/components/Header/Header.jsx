import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'styled-components-grid';

import HeaderText from '../HeaderText';
import HeaderStyle from './HeaderStyle';

const displayName = 'Header';

const propTypes = {
  HeaderItem: PropTypes.elementType,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  HeaderItem: null
};

export default function Header({ HeaderItem, pageTitle }) {
  return (
    <HeaderStyle>
      <Grid wrap={false} valign="stretch">
        <Grid.Unit size={0.35}>{HeaderItem}</Grid.Unit>
        <Grid.Unit size={0.35}>
          <HeaderText>{pageTitle}</HeaderText>
        </Grid.Unit>
        <Grid.Unit size={0.35} />
      </Grid>
    </HeaderStyle>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
