import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Stalgic from './components/ProjectDetails/Stalgic.tsx'
export default createRoutesFromElements(
  <>
    <Route index element={<App />} />
    <Route path="/stalgic" element={<Stalgic />} />
  </>,
)
