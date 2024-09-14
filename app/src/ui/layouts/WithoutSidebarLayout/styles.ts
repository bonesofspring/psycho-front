import { styled } from '@linaria/react'

import { media } from '@/constants/typography/media'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  flex-shrink: 0;
`

interface IMainAreaProps {
  withoutPadding?: boolean
  hasWhiteBackground?: boolean
}

const getPadding = (props: IMainAreaProps) => (props.withoutPadding ? '' : '24px 16px')

const getMobileMPadding = (props: IMainAreaProps) => (props.withoutPadding ? '' : '24px 56px')

const getTabletPadding = (props: IMainAreaProps) => (props.withoutPadding ? '' : '36px 56px 24px')

const getTabletMPadding = (props: IMainAreaProps) => (props.withoutPadding ? '' : '36px 64px 24px')

const getDesktopPadding = (props: IMainAreaProps) => (props.withoutPadding ? '' : '56px 64px 48px')

export const MainArea = styled.div<IMainAreaProps>`
  display: flex;
  justify-content: center;
  padding: ${getPadding};
  background-color: white;

  ${media.mobileM} {
    padding: ${getMobileMPadding};
  }

  ${media.tablet} {
    padding: ${getTabletPadding};
  }

  ${media.tabletM} {
    padding: ${getTabletMPadding};
  }

  ${media.desktop} {
    padding: ${getDesktopPadding};
  }
`

export const PageWrapper = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`
