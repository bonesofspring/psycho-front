import * as s from './styles'
import Rnimu from './images/rnimu.png'

export const Logo = () => (
  <s.LogoWrapper data-testid="main-link">
    <a href="/">
      <s.Logo alt="лого" src={Rnimu.src} />
    </a>
  </s.LogoWrapper>
)
