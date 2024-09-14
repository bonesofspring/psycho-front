import { type TBreakpointNames, breakpoints } from '@/constants/typography/breakpoints'

type TBoundaryMediaQuery = {
  mobile: string
  tablet: string
  desktop: string
}

/** Для использования в media sources <picture> */
export const boundaryMediaQuery: TBoundaryMediaQuery = {
  mobile: `(max-width: ${breakpoints.mobileM.max}px)`,
  tablet: `(min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tabletM.max}px)`,
  desktop: `(min-width: ${breakpoints.desktop.min}px)`,
}

type TMediaQuery = {
  [key in TBreakpointNames]: string
}

export const boundaryMedia: TMediaQuery = {
  desktopL: `@media ${breakpoints.desktopL.min}px`,
  desktopM: `@media ${breakpoints.desktopM.min}px`,
  desktop: `@media ${breakpoints.desktop.min}px`,
  tabletM: `@media ${breakpoints.tabletM.min}px`,
  tablet: `@media ${breakpoints.tablet.min}px`,
  mobileM: `@media ${breakpoints.mobileM.min}px`,
  mobile: `@media ${breakpoints.mobile.min}px`,
}

/** Для использования в media sources <picture> */
export const mediaQuery: TMediaQuery = {
  desktopL: `(min-width: ${breakpoints.desktopL.min}px)`,
  desktopM: `(min-width: ${breakpoints.desktopM.min}px)`,
  desktop: `(min-width: ${breakpoints.desktop.min}px)`,
  tabletM: `(min-width: ${breakpoints.tabletM.min}px)`,
  tablet: `(min-width: ${breakpoints.tablet.min}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM.min}px)`,
  mobile: `(min-width: ${breakpoints.mobile.min}px)`,
}

/**
 * Для использования в стилях linaria
 * @example
 * ${media.tablet} {
 *   color: red;
 * }
 * @link https://www.figma.com/file/bxx6DqaeGlfe0QvLkuyHHT/%F0%9F%94%B5-SDS-Local?type=design&node-id=6237%3A155633&mode=design&t=nhlsExeA1B4eV9t3-1
 */
export const media: TMediaQuery = {
  desktopL: `@media ${mediaQuery.desktopL}`,
  desktopM: `@media ${mediaQuery.desktopM}`,
  desktop: `@media ${mediaQuery.desktop}`,
  tabletM: `@media ${mediaQuery.tabletM}`,
  tablet: `@media ${mediaQuery.tablet}`,
  mobileM: `@media ${mediaQuery.mobileM}`,
  mobile: `@media ${mediaQuery.mobile}`,
}
