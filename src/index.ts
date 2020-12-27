import styled from 'styled-components';
import { BoxProps, boxMixin, filterBoxProps } from './utils';

const Box = (props: BoxProps) => styled.div`
  ${boxMixin};
`;

export { BoxProps, Box, filterBoxProps };
