import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

import Weather from './widgets/Weather';
import Notes from './widgets/Notes';
import Todos from './widgets/ToDo';
import News from './widgets/News';
import Clock from './widgets/Clock';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested routes under Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="weather" element={<Weather />} />
          <Route path="notes" element={<Notes />} />
          <Route path="todos" element={<Todos />} />
          <Route path="news" element={<News />} />
          <Route path="clock" element={<Clock />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
