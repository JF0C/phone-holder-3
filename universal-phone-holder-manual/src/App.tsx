import './App.css';
import { Assemble } from './components/Assemble/Assemble';
import { Navbar } from './components/Navbar/Navbar';
import { StartMenu } from './components/StartMenu/StartMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducer } from './store/state';
import { configureStore } from '@reduxjs/toolkit';

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
                <Route path="/" element={<StartMenu />} />
                <Route path="/assemble" element={<Assemble />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
