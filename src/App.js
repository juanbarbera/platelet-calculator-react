import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calculator } from './Calculator';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        index
        element={<Calculator />}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App;