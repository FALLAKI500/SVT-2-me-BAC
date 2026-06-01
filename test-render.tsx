import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';
console.log('Rendering App...');
try {
  const html = ReactDOMServer.renderToString(<App />);
  console.log('Render successful!', html.length);
} catch (e) {
  console.error('Render crashed:', e);
}
