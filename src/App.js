import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes'
/* Page */


function App() {
  return (
    <BrowserRouter>
      <Routes>
				{routes.map(route => {
					return (
						<Route key={route.path} exact path={route.path} element={<route.component />} />
					)
				})}
        {/* <Route path='/board' element={<Board />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
