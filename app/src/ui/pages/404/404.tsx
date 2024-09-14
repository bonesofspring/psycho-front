import Head from 'next/head'

import { WithoutSidebarLayout } from '@/ui/layouts/WithoutSidebarLayout'

import * as s from './styles'

export const NotFoundPage = () => (
  <>
    <Head>
      <title>Psycho pass - 404</title>
      <meta content="404" name="Psycho pass - 404" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <WithoutSidebarLayout>
      <s.Container>
        <s.Title>Такой страницы нет</s.Title>
        <s.Text>
          Попробуйте&nbsp;
          <s.Link href="/">перейти на главную страницу</s.Link>
        </s.Text>
      </s.Container>
    </WithoutSidebarLayout>
  </>
)
