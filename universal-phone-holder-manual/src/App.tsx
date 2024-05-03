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
import { AssembleAttachNeck } from './components/Assemble/AssembleAttachNeck';
import { Adjust } from './components/Adjust/Adjust';
import { AdjustExtendAll } from './components/Adjust/AdjustExtendAll';
import { AdjustPlacePhone } from './components/Adjust/AdjustPlacePhone';
import { AdjustPushFeetIn } from './components/Adjust/AdjustPushFeetIn';
import { AdjustTightenNeck } from './components/Adjust/AdjustTightenNeck';
import { AdjustLowerFeet } from './components/Adjust/AdjustLowerFeet';
import { AdjustTestAssembly } from './components/Adjust/AdjustTestAssembly';
import { Mount } from './components/Mount/Mount';

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
                <Route path={Constants.AssembleNeckPath} element={<AssembleAttachNeck />} />
                <Route path={Constants.AdjustPath} element={<Adjust />} />
                <Route path={Constants.AdjustExtendAllPath} element={<AdjustExtendAll />} />
                <Route path={Constants.AdjustPlacePhonePath} element={<AdjustPlacePhone />} />
                <Route path={Constants.AdjustPushFeetInPath} element={<AdjustPushFeetIn />} />
                <Route path={Constants.AdjustTightenNeckPath} element={<AdjustTightenNeck />} />
                <Route path={Constants.AdjustLowerFeetPath} element={<AdjustLowerFeet />} />
                <Route path={Constants.AdjustTestAssemblyPath} element={<AdjustTestAssembly />} />
                <Route path={Constants.MountPath} element={<Mount />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
