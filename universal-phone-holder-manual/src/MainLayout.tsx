
import * as icon from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import { AppBar, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { Navbar } from './components/Navigation/Navbar';
import { RouterOutlet } from "./RouterOutlet";
import { useAppDispatch, useAppSelector } from "./store/store";
import { setNavbar } from "./store/UiReducer";

export const MainLayout: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const uiState = useAppSelector((state) => state.uiState)
  const navbarOpen = uiState.showNavbar;

  return <div className='App h-svh'>
    <AppBar sx={{ zIndex: 2000 }}>
      <div className='flex flex-row justify-center app-bar p-2 font-bold'>
        <div className='absolute left-0' >
          <Button sx={{ color: 'white', fontSize: 25 }} onClick={() => dispatch(setNavbar(!navbarOpen))}>
            <CIcon icon={icon.cilMenu} height={30} />
          </Button>
        </div>
        <div className='text-2xl md:text-3xl'>Universal Phone Holder</div>
      </div>
    </AppBar>
    <div className='h-full'>
      <Navbar />
      <div className='h-14'>
      </div>
      <div className='main-content'>
        <RouterOutlet />
      </div>
    </div>
  </div>
}