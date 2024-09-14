import { IndexPage } from '@/ui/pages/IndexPage'
import { AuthGuard } from '@/ui/guards/AuthGuard'

const Index = () => (
  <AuthGuard>
    <IndexPage />
  </AuthGuard>
)

export default Index
