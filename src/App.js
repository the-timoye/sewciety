import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './styles/GlobalStyles';
import { Nav } from './components';
import Home from './pages/Home';
// import NotFound from './pages/404';
// import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
