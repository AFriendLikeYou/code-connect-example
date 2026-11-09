import { mount } from 'svelte';
import './lib/tokens.css';
import './nav.js';
import App from './App.svelte';

mount(App, { target: document.getElementById('app') });
