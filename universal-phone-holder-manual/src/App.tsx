import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainLayout } from './MainLayout';
import './components/LoadingSpinner/LoadingSpinner.css';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import muiTheme from './muiTheme';

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
