import React from 'react';
//Routing
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
//Styles
import {GlobalStype} from './GlobalStyle';


import UserProvider  from './context';

const App = () =>( 
    <Router>
      <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStype />
      </UserProvider>
    </Router>
);

export default App;
