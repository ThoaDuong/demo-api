import React from 'react';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const showRoutes = (routes) => {
    var result = null;
    if(routes.length > 0){
        result = routes.map((item, index) => {
            return (
                <Route
                    key = { index }
                    path = { item.to }
                    exact = { item.exact }
                    component = { item.component }
                />
            );
        })
    }
    return result;
}
function App() {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Switch>    
                    { showRoutes(routes) }   
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;