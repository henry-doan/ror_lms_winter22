import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Courses from './components/courses/Courses';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;