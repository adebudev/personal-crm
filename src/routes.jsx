/*
 * Modules
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
 * Components Router
 */
import { Login } from './components/pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='/about' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
