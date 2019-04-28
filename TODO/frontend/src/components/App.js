import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './task/Dashboard';
import {Provider} from 'react-redux'; //this is what combines react and redux Wrapped around everythiong
import store from '../store';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


const alertOptions = {
    timeout: 2500,
    position: 'top center'
}


//Provider = store configures react with redux

class App extends Component {
    render(){

        return (
            <Provider store={store}>                    
            <AlertProvider template={AlertTemplate}
            {...alertOptions}>
           <Fragment>
                <Header/>
                <div id='container'>
                    <Dashboard/>
                </div>
            </Fragment>
            </AlertProvider>
            </Provider>


            )

    }

    
}

ReactDOM.render(<App/>, document.getElementById('app'));

