import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './css/main.css';
import Main from './components/Main';
import InterMain from './components/international/InterMain';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/international" component={InterMain} />
                <Route path="/" component={Main} />
            </Switch>
        </div>
    </Router>
    ,
    document.getElementById('root')
)
registerServiceWorker();