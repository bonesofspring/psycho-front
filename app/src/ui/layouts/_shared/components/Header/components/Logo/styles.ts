import { styled } from '@linaria/react'

import { media } from '@/constants/typography/media'

export const LogoWrapper = styled.div`
  display: flex;
`

export const Logo = styled.img`
  width: 140px;
  height: 16px;

  ${media.desktop} {
    width: 210px;
    height: 24px;
  }
`
