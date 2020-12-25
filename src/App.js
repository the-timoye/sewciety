import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './assets/styles/GlobalStyles';
import { Nav } from './components';
import Home from './pages/Home';

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
