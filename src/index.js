import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
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
