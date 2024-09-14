import { styled } from '@linaria/react'

import { media } from '@/constants/typography/media'

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.desktop} {
    min-height: calc(100vh - 150px);
  }
`

export const Title = styled.h1`
  display: flex;
`

export const Text = styled.p`
  margin-top: 24px;
  text-align: center;
`

export const Link = styled.a`
  text-decoration: none;
`
