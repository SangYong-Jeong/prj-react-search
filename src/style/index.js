import styled from 'styled-components';
export * from 'styled-components';

export default styled;

export const CommonLink = styled.a`
  width: 100%;
`;

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xxl: ` screen and (max-width: ${size.xxl})`,
  xl: ` screen and (max-width: ${size.xl})`,
  lg: ` screen and (max-width: ${size.lg})`,
  md: ` screen and (max-width: ${size.md})`,
  sm: ` screen and (max-width: ${size.sm})`,
  xs: ` screen and (max-width: ${size.xs})`,
};
