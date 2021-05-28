import React, { ForwardedRef } from 'react';
export default 'SvgrURL';

const SvgrMock = React.forwardRef((props, ref: ForwardedRef<HTMLSpanElement>) => (
  <span ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
