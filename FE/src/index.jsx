import ReactDOM from 'react-dom/client';

import { StrictMode, React } from 'react';
import App from './App';
import { worker } from './mocks/worker';

<<<<<<< HEAD
if (process.env.NODE_ENV === 'development') {
  worker.start();
}
=======
// if (process.env.NODE_ENV === 'development') {
worker.start();
// }
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
