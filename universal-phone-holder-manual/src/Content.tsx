
import React, { Dispatch, FunctionComponent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Accessories } from './components/Accessories/Accessories';
import { AccessoryLampMirrorAssembly } from './components/Accessories/AccessoryLampMirrorAssembly';
import { AccessoryLampMirrorComplete } from './components/Accessories/AccessoryLampMirrorComplete';
import { AccessoryLampMirrorPhone } from './components/Accessories/AccessoryLampMirrorPhone';
import { AccessoryVideoMirrorAssembly } from './components/Accessories/AccessoryVideoMirrorAssembly';
import { AccessoryVideoMirrorComplete } from './components/Accessories/AccessoryVideoMirrorComplete';
import { AccessoryVideoMirrorPhone } from './components/Accessories/AccessoryVideoMirrorPhone';
import { Adjust } from './components/Adjust/Adjust';
import { AdjustExtendAll } from './components/Adjust/AdjustExtendAll';
import { AdjustLowerFeet } from './components/Adjust/AdjustLowerFeet';
import { AdjustPlacePhone } from './components/Adjust/AdjustPlacePhone';
import { AdjustPushFeetIn } from './components/Adjust/AdjustPushFeetIn';
import { AdjustTestAssembly } from './components/Adjust/AdjustTestAssembly';
import { AdjustTightenNeck } from './components/Adjust/AdjustTightenNeck';
import { Assemble } from './components/Assemble/Assemble';
import { AssembleAttachNeck } from './components/Assemble/AssembleAttachNeck';
import { AssembleInsertFoot } from './components/Assemble/AssembleInsertFoot';
import { AssembleScrewFoot } from './components/Assemble/AssembleScrewFoot';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Mount } from './components/Mount/Mount';
import { MountAeroComplete } from './components/Mount/MountAeroComplete';
import { MountAeroHandlebar } from './components/Mount/MountAeroHandlebar';
import { MountAeroHolder } from './components/Mount/MountAeroHolder';
import { MountAeroRing } from './components/Mount/MountAeroRing';
import { MountAeroV2Complete } from './components/Mount/MountAeroV2Complete';
import { MountAeroV2Handlebar } from './components/Mount/MountAeroV2Handlebar';
import { MountAeroV2Holder } from './components/Mount/MountAeroV2Holder';
import { MountAeroV2Phone } from './components/Mount/MountAeroV2Phone';
import { MountCenterComplete } from './components/Mount/MountCenterComplete';
import { MountCenterHolder } from './components/Mount/MountCenterHolder';
import { MountCenterRing } from './components/Mount/MountCenterRing';
import { MountCenterV2Complete } from './components/Mount/MountCenterV2Complete';
import { MountCenterV2Holder } from './components/Mount/MountCenterV2Holder';
import { MountCenterV2Phone } from './components/Mount/MountCenterV2Phone';
import { MountCenterV2Ring } from './components/Mount/MountCenterV2Ring';
import { MountCenterV2Tighten } from './components/Mount/MountCenterV2Tighten';
import { MountHandlebar } from './components/Mount/MountHandlebar';
import { MountHandlebarComplete } from './components/Mount/MountHandlebarComplete';
import { MountHandlebarV2Complete } from './components/Mount/MountHandlebarV2Complete';
import { MountHandlebarV2Holder } from './components/Mount/MountHandlebarV2Holder';
import { MountHandlebarV2Phone } from './components/Mount/MountHandlebarV2Phone';
import { MountHandlebarV2Ring } from './components/Mount/MountHandlebarV2Ring';
import { MountHandlebarV2Tighten } from './components/Mount/MountHandlebarV2Tighten';
import { Navbar } from './components/Navbar/Navbar';
import { StartMenu } from './components/StartMenu/StartMenu';
import { Paths } from './constants/Paths';
import { AppState, closePopups } from './store/state';

export const Content: FunctionComponent = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const isOpen = useSelector((state: AppState) => state.currentOpenPopup) !== null;

    return <>
        <div className='App' onClick={() => { if (isOpen) dispatch(closePopups()) }}>
          <h2 className='title'>
            Universal Phone Holder
          </h2>
          <div className='main-container'>
            <Navbar />
            <div className='main-content'>
              <Routes>
                <Route path={Paths.LoadingSpinnerPath} element={<LoadingSpinner />} />

                <Route path={Paths.HtmlIndexFilePath} element={<StartMenu />} />
                <Route path={Paths.HtmlPhoneholderFilePath} element={<StartMenu />} />

                <Route path={Paths.StartMenuPath} element={<StartMenu />} />
                
                <Route path={Paths.AssemblePath} element={<Assemble />} />
                <Route path={Paths.AssembleInsertFootPath} element={<AssembleInsertFoot />} />
                <Route path={Paths.AssembleScrewFootPath} element={<AssembleScrewFoot />} />
                <Route path={Paths.AssembleNeckPath} element={<AssembleAttachNeck />} />

                <Route path={Paths.AdjustPath} element={<Adjust />} />
                <Route path={Paths.AdjustExtendAllPath} element={<AdjustExtendAll />} />
                <Route path={Paths.AdjustPlacePhonePath} element={<AdjustPlacePhone />} />
                <Route path={Paths.AdjustPushFeetInPath} element={<AdjustPushFeetIn />} />
                <Route path={Paths.AdjustTightenNeckPath} element={<AdjustTightenNeck />} />
                <Route path={Paths.AdjustLowerFeetPath} element={<AdjustLowerFeet />} />
                <Route path={Paths.AdjustTestAssemblyPath} element={<AdjustTestAssembly />} />

                <Route path={Paths.MountPath} element={<Mount />} />

                <Route path={Paths.MountHandlebarPath} element={<MountHandlebar />} />
                <Route path={Paths.MountHandlebarCompletePath} element={<MountHandlebarComplete />} />

                <Route path={Paths.MountCenterRingPath} element={<MountCenterRing />} />
                <Route path={Paths.MountCenterHolderPath} element={<MountCenterHolder />} />
                <Route path={Paths.MountCenterCompletePath} element={<MountCenterComplete />} />

                <Route path={Paths.MountAeroHolderPath} element={<MountAeroHolder />} />
                <Route path={Paths.MountAeroRingPath} element={<MountAeroRing />} />
                <Route path={Paths.MountAeroHandlebarPath} element={<MountAeroHandlebar />} />
                <Route path={Paths.MountAeroCompletePath} element={<MountAeroComplete />} />

                <Route path={Paths.MountHandlebarV2RingPath} element={<MountHandlebarV2Ring />} />
                <Route path={Paths.MountHandlebarV2HolderPath} element={<MountHandlebarV2Holder />} />
                <Route path={Paths.MountHandlebarV2TightenPath} element={<MountHandlebarV2Tighten />} />
                <Route path={Paths.MountHandlebarV2CompletePath} element={<MountHandlebarV2Complete />} />
                <Route path={Paths.MountHandlebarV2PhonePath} element={<MountHandlebarV2Phone />} />

                <Route path={Paths.MountCenterV2RingPath} element={<MountCenterV2Ring />} />
                <Route path={Paths.MountCenterV2HolderPath} element={<MountCenterV2Holder />} />
                <Route path={Paths.MountCenterV2TightenPath} element={<MountCenterV2Tighten />} />
                <Route path={Paths.MountCenterV2CompletePath} element={<MountCenterV2Complete />} />
                <Route path={Paths.MountCenterV2PhonePath} element={<MountCenterV2Phone />} />

                <Route path={Paths.MountAeroV2HolderPath} element={<MountAeroV2Holder />} />
                <Route path={Paths.MountAeroV2HandlebarPath} element={<MountAeroV2Handlebar />} />
                <Route path={Paths.MountAeroV2CompletePath} element={<MountAeroV2Complete />} />
                <Route path={Paths.MountAeroV2PhonePath} element={<MountAeroV2Phone />} />

                <Route path={Paths.AccessoriesPath} element={<Accessories />} />

                <Route path={Paths.AccessoryLampMirrorAssemblyPath} element={<AccessoryLampMirrorAssembly />} />
                <Route path={Paths.AccessoryLampMirrorCompletePath} element={<AccessoryLampMirrorComplete />} />
                <Route path={Paths.AccessoryLampMirrorPhonePath} element={<AccessoryLampMirrorPhone />} />

                <Route path={Paths.AccessoryVideoMirrorAssemblyPath} element={<AccessoryVideoMirrorAssembly />} />
                <Route path={Paths.AccessoryVideoMirrorCompletePath} element={<AccessoryVideoMirrorComplete />} />
                <Route path={Paths.AccessoryVideoMirrorPhonePath} element={<AccessoryVideoMirrorPhone />} />
              </Routes>
            </div>
          </div>
        </div>
    </>
}