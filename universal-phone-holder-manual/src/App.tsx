import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './Content';
import './components/LoadingSpinner/LoadingSpinner.css';
import { reducer } from './store/state';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
