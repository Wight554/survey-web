import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'styled-components-grid';

import HeaderText from '../HeaderText';
import HeaderStyle from './HeaderStyle';

const displayName = 'Header';

const propTypes = {
  headerItem: PropTypes.elementType,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  headerItem: null
};

export default function Header({ headerItem, pageTitle }) {
  return (
    <HeaderStyle>
      <Grid wrap={false} valign="stretch">
        <Grid.Unit size={0.35}>{headerItem}</Grid.Unit>
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
