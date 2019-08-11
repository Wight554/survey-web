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
  isLogged: PropTypes.bool.isRequired
};

const defaultProps = {
  HeaderItem: React.Fragment,
  pageTitle: 'Onseo'
};

export default function MasterPage({ children, HeaderItem, pageTitle, isLogged }) {
  return (
    <MasterPageStyle>
      <Header headerItem={HeaderItem} pageTitle={pageTitle} />
      {children}
      {isLogged ? <div>Here will be NavBar</div> : <Copyright />}
    </MasterPageStyle>
  );
}

MasterPage.displayName = displayName;
MasterPage.propTypes = propTypes;
MasterPage.defaultProps = defaultProps;
