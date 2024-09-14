import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { type FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import CircularProgress from '@mui/joy/CircularProgress'
import Button from '@mui/joy/Button'
import Input from '@mui/joy/Input'

import { useAppDispatch } from '@/store'
import { reMail } from '@/ui/pages/LoginPage/utils'
import { userLoadingStatusSelector, userProfileSelector } from '@/store/slices/UserProfile'
import { logIn } from '@/store/slices/UserProfile/UserProfile'
import { WithoutSidebarLayout } from '@/ui/layouts/WithoutSidebarLayout'

import logo from './images/rnimu.png'
import * as s from './styles'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const user = useSelector(userProfileSelector)
  const loadingStatus = useSelector(userLoadingStatusSelector)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailDirty, setIsEmailDirty] = useState(false)
  const [isPasswordDirty, setIsPasswordDirty] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(logIn({ email, password }))
  }

  useEffect(() => {
    const isValid = reMail.test(email) && password.length > 0

    setIsFormValid(isValid)
  }, [email, password])

  useEffect(() => {
    if (user !== null) {
      router.push('/')
    }
  }, [user, router])

  return (
    <>
      <Head>
        <title>Psycho Pass Login</title>
        <meta content="Psycho Pass Login" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <WithoutSidebarLayout loadingStatus={loadingStatus} withoutPadding>
        <s.Wrapper>
          <s.Container>
            <Image alt="Logo" height={30} src={logo.src} width={256} />

            <s.Form onSubmit={handleSubmit}>
              <Input
                error={isEmailDirty && !reMail.test(email)}
                placeholder="Логин"
                required
                type="email"
                value={email}
                onBlur={() => setIsEmailDirty(true)}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                error={isPasswordDirty && password.length === 0}
                name="login-password"
                placeholder="Пароль"
                required
                type="password"
                value={password}
                onBlur={() => setIsPasswordDirty(true)}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                disabled={!isFormValid || loadingStatus === 'loading'}
                size="sm"
                type="submit"
              >
                {loadingStatus === 'loading' ? <CircularProgress size="sm" /> : 'Войти'}
              </Button>
            </s.Form>
          </s.Container>
        </s.Wrapper>
      </WithoutSidebarLayout>
    </>
  )
}
