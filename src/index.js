import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();

//create-react-app doesn't allow you to import any files outside of the /src
// To enable this you must: 
//  edit webpack.config