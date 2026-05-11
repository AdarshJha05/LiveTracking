import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TrackOrder from './pages/TrackOrder';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
