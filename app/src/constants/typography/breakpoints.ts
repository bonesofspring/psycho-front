export type TBreakpointNames =
  | 'mobile'
  | 'mobileM'
  | 'tablet'
  | 'tabletM'
  | 'desktop'
  | 'desktopM'
  | 'desktopL'

type TBreakpoints = {
  [key in TBreakpointNames]: {
    min: number
    max?: number
  }
}

export const breakpoints: TBreakpoints = {
  mobile: {
    min: 375,
    max: 559,
  },
  mobileM: {
    min: 560,
    max: 769,
  },
  tablet: {
    min: 770,
    max: 959,
  },
  tabletM: {
    min: 960,
    max: 1199,
  },
  desktop: {
    min: 1200,
    max: 1439,
  },
  desktopM: {
    min: 1440,
    max: 1919,
  },
  desktopL: {
    min: 1920,
  },
}
