import {Route, Switch} from 'react-router-dom';
import React from 'react';

import  AboutPage  from './pages/about';
import  HomePage  from './pages/home';
import SignAndLoginPage from './pages/signAndLogin';
import ContactPage from './pages/contact';

const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/register" component={SignAndLoginPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={()=><div>Page not Found 404!</div>}/>
        </Switch>
    );
}
export default Routes;