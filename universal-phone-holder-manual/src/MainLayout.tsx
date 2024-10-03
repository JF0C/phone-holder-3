
import * as icon from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import { AppBar, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { Navbar } from './components/Navbar/Navbar';
import { RouterOutlet } from "./RouterOutlet";
import { useAppDispatch, useAppSelector } from "./store/store";
import { closePopup, setNavbar } from "./store/UiReducer";

export const MainLayout: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const uiState = useAppSelector((state) => state.uiState)
  const popupOpen = uiState.currentOpenPopup !== null;
  const navbarOpen = uiState.showNavbar;

  return <>
    <div className='App h-full' onClick={() => { if (popupOpen) dispatch(closePopup()) }}>
      <AppBar sx={{ zIndex: 2000 }}>
        <div className='flex flex-row justify-center app-bar p-2 font-bold'>
          <div className='absolute left-0' >
            <Button sx={{color: 'white', fontSize: 25}} onClick={() => dispatch(setNavbar(!navbarOpen))}>
              <CIcon icon={icon.cilMenu} height={30} />
            </Button>
          </div>
          <div className='text-2xl md:text-4xl'>Universal Phone Holder</div>
        </div>
      </AppBar>
      <div className='h-full'>
        <Navbar />
        <div className="app-bar-space"></div>
        <div className='main-content'>
          <RouterOutlet />
        </div>
      </div>
    </div>
  </>
}