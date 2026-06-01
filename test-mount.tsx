import React from 'react';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import App from './src/App';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>');
(global as any).window = dom.window;
(global as any).document = dom.window.document;
// removed navigator

console.log('Rendering App in JSDOM...');
try {
  render(<App />);
  console.log('App correctly rendered without crashing on mount!');
} catch (e) {
  console.error('App crashed during mount:', e);
}
