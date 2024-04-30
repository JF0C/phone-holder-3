import './App.css';
import { Assemble } from './components/Assemble/Assemble';
import { Navbar } from './components/Navbar/Navbar';
import { StartMenu } from './components/StartMenu/StartMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducer } from './store/state';
import { configureStore } from '@reduxjs/toolkit';
import { AssembleInsertFoot } from './components/Assemble/AssembleInsertFoot';
import { Constants } from './constants/Constants';
import { AssembleScrewFoot } from './components/Assemble/AssembleScrewFoot';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h2 className='title'>
            Universal Phone Holder
          </h2>
          <div className="main-container">
            <Navbar />
            <div className='main-content'>
              <Routes>
                <Route path={Constants.StartMenuPath} element={<StartMenu />} />
                <Route path={Constants.AssemblePath} element={<Assemble />} />
                <Route path={Constants.AssembleInsertFootPath} element={<AssembleInsertFoot />} />
                <Route path={Constants.AssembleScrewFootPath} element={<AssembleScrewFoot />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
