import { styled } from '@linaria/react'
import { css } from '@linaria/core'

import { media } from '@/constants/typography/media'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;

  ${media.desktop} {
    margin-top: 20px;
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Text = styled.p`
  margin-top: 24px;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 0;
  margin-top: 32px;
  gap: 20px;

  ${media.tablet} {
    flex-direction: row;
    justify-content: center;
    padding: 20px;
  }
`

export const ButtonClass = css`
  ${media.tablet} {
    width: 222px;
  }
`

export const TabletBr = styled.br`
  display: none;

  ${media.tablet} {
    display: inline;
  }
`
