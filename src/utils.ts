import styled, { css } from 'styled-components';

export interface BoxProps {
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

export const boxMixin = css<BoxProps>`
  display: ${(props) => props.d || props.display};

  /* Sizing props */
  height: ${(props) => props.h || props.height};
  min-height: ${(props) => props.minh || props.minHeight};
  max-height: ${(props) => props.maxh || props.maxHeight};
  width: ${(props) => props.w || props.width};
  min-width: ${(props) => props.minw || props.minWidth};
  max-width: ${(props) => props.maxw || props.maxWidth};

  /* Layout props */
  position: ${(props) => props.pos || props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zi || props.zIndex};
  text-align: ${(props) => props.textAlign};

  /* Margin props */
  margin: ${(props) => props.m || props.margin};
  margin-top: ${(props) => props.mt || props.marginTop};
  margin-right: ${(props) => props.mr || props.marginRight};
  margin-bottom: ${(props) => props.mb || props.marginBottom};
  margin-left: ${(props) => props.ml || props.marginLeft};

  /* Padding props */
  padding: ${(props) => props.p || props.padding};
  padding-top: ${(props) => props.pt || props.paddingTop};
  padding-right: ${(props) => props.pr || props.paddingRight};
  padding-bottom: ${(props) => props.pb || props.paddingBottom};
  padding-left: ${(props) => props.pl || props.paddingLeft};

  /* Border props */
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};

  /* Flexbox props */
  flex: ${(props) => (typeof props.flex === 'string' ? props.flex : undefined)};
  flex-basis: ${(props) => props.fb || props.flexBasis};
  flex-wrap: ${(props) => props.fw || props.flexWrap};
  flex-grow: ${(props) => props.fg || props.flexGrow};
  flex-shrink: ${(props) => props.fs || props.flexShrink};
  align-items: ${(props) => props.ai || props.alignItems};
  align-content: ${(props) => props.ac || props.alignContent};
  align-self: ${(props) => props.als || props.alignSelf};
  justify-items: ${(props) => props.ji || props.justifyItems};
  justify-content: ${(props) => props.jc || props.justifyContent};
  justify-self: ${(props) => props.js || props.justifySelf};

  ${(props) =>
    props.flex &&
    typeof props.flex === 'boolean' &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.flex &&
    typeof props.flex === 'boolean' &&
    props.row &&
    css`
      flex-direction: row;
    `};

  ${(props) =>
    props.flex === '2' &&
    props.col &&
    css`
      flex-direction: column;
    `};

  /* CSS Grid props */
  grid-template-columns: ${(props) => props.gtc || props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gtr || props.gridTemplateRows};
  grid-auto-rows: ${(props) => props.gar || props.gridAutoRows};
  grid-auto-columns: ${(props) => props.gac || props.gridAutoColumns};
  grid-column-start: ${(props) => props.gcs || props.gridColumnStart};
  grid-column-end: ${(props) => props.gce || props.gridColumnEnd};
  grid-column-gap: ${(props) => props.gcg || props.gridColumnGap};
  grid-row-start: ${(props) => props.grs || props.gridRowStart};
  grid-row-end: ${(props) => props.gre || props.gridRowEnd};
  grid-row-gap: ${(props) => props.grg || props.gridRowGap};
  grid-gap: ${(props) => props.gg || props.gridGap};
  grid-area: ${(props) => props.ga || props.gridArea};
  grid-column: ${(props) => props.gc || props.gridColumn};
  grid-row: ${(props) => props.gr || props.gridRow};

  /* Overflow props */
  ${(props) =>
    props.scroll &&
    css`
      overflow: auto;
    `}

  ${(props) =>
    props.scrollY &&
    css`
      overflow-y: auto;
    `}

    ${(props) =>
    props.scrollX &&
    css`
      overflow-x: auto;
    `}
`;

const boxPropsList: string[] = [
  'd',
  'display',
  'h',
  'height',
  'minh',
  'minHeight',
  'maxh',
  'maxHeight',
  'w',
  'width',
  'minw',
  'minWidth',
  'maxw',
  'maxWidth',
  'pos',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'zi',
  'zIndex',
  'textAlign',
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'border',
  'borderRadius',
  'borderWidth',
  'flex',
  'row',
  'col',
  'fb',
  'flexBasis',
  'fw',
  'flexWrap',
  'fg',
  'flexGrow',
  'fs',
  'flexShrink',
  'ai',
  'alignItems',
  'ac',
  'alignContent',
  'als',
  'alignSelf',
  'ji',
  'justifyItems',
  'jc',
  'justifyContent',
  'js',
  'justifySelf',
  'gtc',
  'gridTemplateColumns',
  'gtr',
  'gridTemplateRows',
  'gar',
  'gridAutoRows',
  'gac',
  'gridAutoColumns',
  'gcs',
  'gridColumnStart',
  'gce',
  'gridColumnEnd',
  'gcg',
  'gridColumnGap',
  'grs',
  'gridRowStart',
  'gre',
  'gridRowEnd',
  'grg',
  'gridRowGap',
  'gg',
  'gridGap',
  'ga',
  'gridArea',
  'gc',
  'gridColumn',
  'gr',
  'gridRow',
  'scrollX',
  'scrollY',
  'scroll',
];

export const filterBoxProps = (props: { [x: string]: any }) =>
  Object.keys(props).reduce<Record<string, string>>(
    (accum, key) => (boxPropsList.includes(key) ? { ...accum, [key]: props[key] } : accum),
    {},
  );
