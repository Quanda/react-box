# @quanda/react-box
A React component for rapid box modeling

Built with `TypeScript` and `styled-components`

## Overview
`Box` is simply an HTML `div` element. What makes it unique are it's [available props](#available-props) which are semantically defined to enable rapid layouts using common box-model attributes such as `padding`, `margin`, `position`, and so on.


## Installation via NPM

```shell
npm install @quanda/react-box
```

## Usage

### Basic Flexbox example

```jsx
import { Box } from '@quanda/react-box';

const BoxDemo = () => {
  return (
    <Box
      flex
      ai='center'
      jc='space-between'
      maxw='720px'
      m='auto'
    >
      <span>A</span>
      <span>B</span>
      <span>C</span>
    </Box>
  )
}

export default BoxDemo;
```

## Available Props

Note that many of the props are defined twice in order to allow for both shorthand and verbose usage. For example, the CSS property `display` can be set using either the `d` or `display` prop. 

Full props list (with types)

```
{
  className?: string;
  children: JSX.Element[] | JSX.Element;
  d?: string;
  display?: string;
  h?: string;
  height?: string;
  minh?: string;
  minHeight?: string;
  maxh?: string;
  maxHeight?: string;
  w?: string;
  width?: string;
  minw?: string;
  minWidth?: string;
  maxw?: string;
  maxWidth?: string;
  pos?: string;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zi?: string;
  zIndex?: string;
  textAlign?: string;
  m?: string;
  margin?: string;
  mt?: string;
  marginTop?: string;
  mr?: string;
  marginRight?: string;
  mb?: string;
  marginBottom?: string;
  ml?: string;
  marginLeft?: string;
  p?: string;
  padding?: string;
  pt?: string;
  paddingTop?: string;
  pr?: string;
  paddingRight?: string;
  pb?: string;
  paddingBottom?: string;
  pl?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderWidth?: string;
  flex?: boolean | string;
  row?: boolean;
  col?: boolean;
  fb?: string;
  flexBasis?: string;
  fw?: string;
  flexWrap?: string;
  fg?: string;
  flexGrow?: string;
  fs?: string;
  flexShrink?: string;
  ai?: string;
  alignItems?: string;
  ac?: string;
  alignContent?: string;
  als?: string;
  alignSelf?: string;
  ji?: string;
  justifyItems?: string;
  jc?: string;
  justifyContent?: string;
  js?: string;
  justifySelf?: string;
  gtc?: string;
  gridTemplateColumns?: string;
  gtr?: string;
  gridTemplateRows?: string;
  gar?: string;
  gridAutoRows?: string;
  gac?: string;
  gridAutoColumns?: string;
  gcs?: string;
  gridColumnStart?: string;
  gce?: string;
  gridColumnEnd?: string;
  gcg?: string;
  gridColumnGap?: string;
  grs?: string;
  gridRowStart?: string;
  gre?: string;
  gridRowEnd?: string;
  grg?: string;
  gridRowGap?: string;
  gg?: string;
  gridGap?: string;
  ga?: string;
  gridArea?: string;
  gc?: string;
  gridColumn?: string;
  gr?: string;
  gridRow?: string;
  scroll?: boolean;
  scrollY?: boolean;
  scrollX?: boolean;
}
```