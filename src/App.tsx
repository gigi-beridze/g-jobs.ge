import "./app.scss"
import { Header } from "./components/Header/Header"

import { Routes, Route, Navigate } from 'react-router-dom'
import { JobLists } from "./components/Jobs/JobLists"
import { JobDetails } from "./components/Job-details/JobDetails"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/jobs"/>}/>
        <Route path="/jobs" element={<JobLists />}/>
        <Route path="/jobs/:position" element={<JobDetails />}/>
      </Routes>
    </div>
  )
}

export default App
