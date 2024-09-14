import { useScroll } from '@/lib/hooks/useScroll'

import { Logo } from './components/Logo'
import { UserBlock } from './components/UserBlock'
import * as s from './styles'

export const Header = () => {
  const { scrollY } = useScroll()

  return (
    <s.Header data-testid="header" stickyHeader={scrollY > 10}>
      <s.Content>
        <Logo />

        <UserBlock />
      </s.Content>
    </s.Header>
  )
}
