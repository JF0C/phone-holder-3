import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainLayout } from './MainLayout';
import './components/LoadingSpinner/LoadingSpinner.css';
import { store } from './store/store';

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  );
}
