import { Suspense, lazy } from "react"
import { SemipolarLoading } from "react-loadingg"

const Dashboard = lazy(() => import("containers/Dashboard"))

const App = () => (
  <Suspense fallback={<SemipolarLoading />}>
    <Dashboard />
  </Suspense>
)

export default App
