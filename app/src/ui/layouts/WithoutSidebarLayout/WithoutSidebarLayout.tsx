import type { ReactNode } from 'react'
import type { TLoadingStatus } from '@/store/types'

import { Header } from '@/ui/layouts/_shared/components/Header'
import { HTTP500ErrorStub } from '@/ui/layouts/_shared/components/HTTP500ErrorStub'

import * as s from './styles'

interface IProps {
  withoutPadding?: boolean
  children: ReactNode
  hasWhiteBackground?: boolean
  loadingStatus?: TLoadingStatus
}

export const WithoutSidebarLayout = ({
  loadingStatus,
  withoutPadding,
  children,
  hasWhiteBackground,
}: IProps) => {
  const isLoadFailed = loadingStatus === 'failed'

  return (
    <s.Layout>
      <Header />

      <s.MainArea hasWhiteBackground={hasWhiteBackground} withoutPadding={withoutPadding}>
        <s.PageWrapper>{isLoadFailed ? <HTTP500ErrorStub /> : children}</s.PageWrapper>
      </s.MainArea>
    </s.Layout>
  )
}
