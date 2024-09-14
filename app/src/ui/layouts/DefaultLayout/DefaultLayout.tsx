import type { ReactNode } from 'react'
import type { TLoadingStatus } from '@/store/types'

import { HTTP500ErrorStub } from '@/ui/layouts/_shared/components/HTTP500ErrorStub'
import { Header } from '@/ui/layouts/_shared/components/Header'

import * as s from './styles'

interface IProps {
  loadingStatus: TLoadingStatus
  children: ReactNode
}

export const DefaultLayout = ({ loadingStatus, children }: IProps) => {
  const isLoadFailed = loadingStatus === 'failed'

  return (
    <s.Layout>
      <Header />

      <s.MainArea>
        <s.PageWrapper>{isLoadFailed ? <HTTP500ErrorStub /> : children}</s.PageWrapper>
      </s.MainArea>
    </s.Layout>
  )
}
