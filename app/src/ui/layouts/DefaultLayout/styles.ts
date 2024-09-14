import { styled } from '@linaria/react'

import { media } from '@/constants/typography/media'

export const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  flex-shrink: 0;
`

export const MainArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 16px;

  ${media.mobileM} {
    padding: 36px 56px;
  }

  ${media.tablet} {
    padding: 36px 56px 24px;
  }

  ${media.tabletM} {
    padding: 36px 64px 24px;
  }

  ${media.desktop} {
    padding: 56px 64px 48px;
  }
`

export const PageWrapper = styled.main`
  display: flex;
  max-width: 813px;
  flex: 1;
`
