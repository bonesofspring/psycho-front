import Head from 'next/head'

import { DefaultLayout } from '@/ui/layouts/DefaultLayout'

import * as s from './styles'

export const IndexPage = () => (
  <>
    <Head>
      <title>Psycho Pass Main</title>
      <meta content="АРМ верификатора" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <DefaultLayout loadingStatus="completed">
      <s.Container>Main Page 1</s.Container>
    </DefaultLayout>
  </>
)
