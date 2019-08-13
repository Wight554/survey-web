import React from 'react';
import PropTypes from 'prop-types';

import MasterPageStyle from './MasterPageStyle';
import Header from '../../Header';
import Copyright from '../../Copyright';

const displayName = 'MasterPage';

const propTypes = {
  children: PropTypes.element.isRequired,
  HeaderItem: PropTypes.elementType,
  pageTitle: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

const defaultProps = {
  HeaderItem: React.Fragment,
  pageTitle: 'Onseo',
  isLoggedIn: false
};

export default function MasterPage({ children, HeaderItem, pageTitle, isLoggedIn }) {
  return (
    <MasterPageStyle>
      <Header headerItem={HeaderItem} pageTitle={pageTitle} />
      {children}
      {isLoggedIn ? <div>Here will be NavBar</div> : <Copyright />}
    </MasterPageStyle>
  );
}

MasterPage.displayName = displayName;
MasterPage.propTypes = propTypes;
MasterPage.defaultProps = defaultProps;
