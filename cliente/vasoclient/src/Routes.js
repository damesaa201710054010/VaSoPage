import React from 'react';
import { Switch, Route} from 'react-router-dom';
import signupForm from './pages/signupForm';
import signinForm from './pages/signinForm';
import coments from './pages/coments';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component = {signupForm}/>
            <Route path='/iniciarSesion' component={signinForm}/>
            <Route path='/coments' component={coments}></Route>
        </Switch>
    )
    //<Route path='/coments' component={coments}></Route>
}
export default Routes;