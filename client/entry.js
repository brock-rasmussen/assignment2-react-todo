'use strict'

import 'babel-polyfill'
import { render } from 'react-dom'
import root from './root'
	
const ROOT_ELEMENT = 'root'

render(
  root(window.__INITIAL_STATE__),
  document.getElementById(ROOT_ELEMENT)
);