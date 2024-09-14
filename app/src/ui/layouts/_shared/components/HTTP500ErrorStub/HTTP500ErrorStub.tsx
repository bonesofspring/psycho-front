import Button from '@mui/joy/Button'
import { useRouter } from 'next/router'

import * as s from './styles'

export const HTTP500ErrorStub = () => {
  const router = useRouter()

  const navigateToMain = () => {
    window.location.href = `/`
  }

  return (
    <s.Container>
      <s.Title>Не удалось загрузить страницу</s.Title>

      <s.Text>
        Попробуйте обновить страницу. Если проблема сохранится, повторите попытку позже.{' '}
        <s.TabletBr />
        Вероятно, мы уже стараемся всё исправить
      </s.Text>

      <s.ButtonsContainer>
        <Button size="sm" variant="outlined" onClick={() => router.reload()}>
          Обновить страницу
        </Button>

        <Button size="sm" variant="outlined" onClick={() => navigateToMain()}>
          Вернуться на главную
        </Button>
      </s.ButtonsContainer>
    </s.Container>
  )
}
