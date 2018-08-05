import React from 'react';
import ResponsiveDrawer  from '../src/Components/ResponsiveDrawer';
// import AppBar from '../src/Components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <BrowserRouter>
            <div className="AppWidth">
              <ResponsiveDrawer />
            </div>
          </BrowserRouter>
        </CssBaseline>
      </React.Fragment>
    );

  }
}

export default App;
