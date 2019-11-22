import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import signupForm from './pages/signupForm';
import signinForm from './pages/signinForm';
import coments from './pages/coments';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component = {signupForm}>    
            </Route>   
            <Route exact  path='/iniciarSesion' component={signinForm}>
            </Route>
        </Switch>
    )
    //<Route path='/coments' component={coments}></Route>
}
export default Routes;