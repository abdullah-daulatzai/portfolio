import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Stalgic from './components/ProjectDetails.tsx/Stalgic.tsx'
import WeekWise from './components/ProjectDetails.tsx/WeekWise.tsx'
import Covid19Tracker from './components/ProjectDetails.tsx/Covid19Tracker.tsx'
export default createRoutesFromElements(
  <>
    <Route index element={<App />} />
    <Route path="/stalgic" element={<Stalgic />} />
    <Route path="/weekwise" element={<WeekWise />} />
    <Route path="/covid19" element={<Covid19Tracker />} />
  </>,
)
