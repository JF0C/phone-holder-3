import './App.css';
import './components/LoadingSpinner/LoadingSpinner.css'
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
import { MountHandlebar } from './components/Mount/MountHandlebar';
import { MountCenterRing } from './components/Mount/MountCenterRing';
import { MountCenterHolder } from './components/Mount/MountCenterHolder';
import { MountHandlebarComplete } from './components/Mount/MountHandlebarComplete';
import { MountCenterComplete } from './components/Mount/MountCenterComplete';
import { MountAeroHolder } from './components/Mount/MountAeroHolder';
import { MountAeroRing } from './components/Mount/MountAeroRing';
import { MountAeroHandlebar } from './components/Mount/MountAeroHandlebar';
import { MountAeroComplete } from './components/Mount/MountAeroComplete';
import { Accessories } from './components/Accessories/Accessories';
import { AccessoryLampMirrorAssembly } from './components/Accessories/AccessoryLampMirrorAssembly';
import { AccessoryLampMirrorComplete } from './components/Accessories/AccessoryLampMirrorComplete';
import { AccessoryLampMirrorPhone } from './components/Accessories/AccessoryLampMirrorPhone';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { MountHandlebarV2Ring } from './components/Mount/MountHandlebarV2Ring';
import { MountHandlebarV2Phone } from './components/Mount/MountHandlebarV2Phone';
import { MountHandlebarV2Tighten } from './components/Mount/MountHandlebarV2Tighten';
import { MountHandlebarV2Complete } from './components/Mount/MountHandlebarV2Complete';
import { MountHandlebarV2Holder } from './components/Mount/MountHandlebarV2Holder';
import { MountCenterV2Ring } from './components/Mount/MountCenterV2Ring';
import { MountCenterV2Holder } from './components/Mount/MountCenterV2Holder';
import { MountCenterV2Tighten } from './components/Mount/MountCenterV2Tighten';
import { MountCenterV2Complete } from './components/Mount/MountCenterV2Complete';
import { MountCenterV2Phone } from './components/Mount/MountCenterV2Phone';
import { MountAeroV2Holder } from './components/Mount/MountAeroV2Holder';
import { MountAeroV2Handlebar } from './components/Mount/MountAeroV2Handlebar';
import { MountAeroV2Complete } from './components/Mount/MountAeroV2Complete';
import { MountAeroV2Phone } from './components/Mount/MountAeroV2Phone';

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
                <Route path={Constants.LoadingSpinnerPath} element={<LoadingSpinner />} />

                <Route path={Constants.HtmlIndexFilePath} element={<StartMenu />} />
                <Route path={Constants.HtmlPhoneholderFilePath} element={<StartMenu />} />

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

                <Route path={Constants.MountHandlebarPath} element={<MountHandlebar />} />
                <Route path={Constants.MountHandlebarCompletePath} element={<MountHandlebarComplete />} />

                <Route path={Constants.MountCenterRingPath} element={<MountCenterRing />} />
                <Route path={Constants.MountCenterHolderPath} element={<MountCenterHolder />} />
                <Route path={Constants.MountCenterCompletePath} element={<MountCenterComplete />} />

                <Route path={Constants.MountAeroHolderPath} element={<MountAeroHolder />} />
                <Route path={Constants.MountAeroRingPath} element={<MountAeroRing />} />
                <Route path={Constants.MountAeroHandlebarPath} element={<MountAeroHandlebar />} />
                <Route path={Constants.MountAeroCompletePath} element={<MountAeroComplete />} />

                <Route path={Constants.MountHandlebarV2RingPath} element={<MountHandlebarV2Ring />} />
                <Route path={Constants.MountHandlebarV2HolderPath} element={<MountHandlebarV2Holder />} />
                <Route path={Constants.MountHandlebarV2TightenPath} element={<MountHandlebarV2Tighten />} />
                <Route path={Constants.MountHandlebarV2CompletePath} element={<MountHandlebarV2Complete />} />
                <Route path={Constants.MountHandlebarV2PhonePath} element={<MountHandlebarV2Phone />} />

                <Route path={Constants.MountCenterV2RingPath} element={<MountCenterV2Ring />} />
                <Route path={Constants.MountCenterV2HolderPath} element={<MountCenterV2Holder />} />
                <Route path={Constants.MountCenterV2TightenPath} element={<MountCenterV2Tighten />} />
                <Route path={Constants.MountCenterV2CompletePath} element={<MountCenterV2Complete />} />
                <Route path={Constants.MountCenterV2PhonePath} element={<MountCenterV2Phone />} />

                <Route path={Constants.MountAeroV2HolderPath} element={<MountAeroV2Holder />} />
                <Route path={Constants.MountAeroV2HandlebarPath} element={<MountAeroV2Handlebar />} />
                <Route path={Constants.MountAeroV2CompletePath} element={<MountAeroV2Complete />} />
                <Route path={Constants.MountAeroV2PhonePath} element={<MountAeroV2Phone />} />

                <Route path={Constants.AccessoriesPath} element={<Accessories />} />
                <Route path={Constants.AccessoryLampMirrorAssemblyPath} element={<AccessoryLampMirrorAssembly />} />
                <Route path={Constants.AccessoryLampMirrorCompletePath} element={<AccessoryLampMirrorComplete />} />
                <Route path={Constants.AccessoryLampMirrorPhonePath} element={<AccessoryLampMirrorPhone />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
