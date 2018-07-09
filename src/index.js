import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import InterMain from './components/international/Main';

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

// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
