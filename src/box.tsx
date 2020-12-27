import * as React from 'react';
import styled from 'styled-components';
import { BoxProps, boxMixin } from './utils';

const BoxTheme = styled.div`
  ${boxMixin};
`;

const Box = (props: BoxProps): JSX.Element => (
  <BoxTheme className={props.className} {...props}>
    {props.children}
  </BoxTheme>
);

export default Box;

