/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default 'SvgrURL';
const SvgrMock = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
