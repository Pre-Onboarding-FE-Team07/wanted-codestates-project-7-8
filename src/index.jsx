import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
