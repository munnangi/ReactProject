import React from 'react';
import ClippedDrawer  from '../src/Components/ClippedDrawer';
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
              <ClippedDrawer />
            </div>
          </BrowserRouter>
        </CssBaseline>
      </React.Fragment>
    );

  }
}

export default App;
