import React from 'react';

import CopyrightStyle from './CopyrightStyle';
import LabelText from '../LabelText';

const displayName = 'Copyright';

export default function Copyright() {
  return (
    <CopyrightStyle>
      <LabelText>Copyright ©2019-present Onseo</LabelText>
    </CopyrightStyle>
  );
}

Copyright.displayName = displayName;
