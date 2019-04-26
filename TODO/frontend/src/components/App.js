import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './task/Dashboard';
import {Provider} from 'react-redux'; //this is what combines react and redux Wrapped around everythiong
import store from '../store';





class App extends Component {
    render(){

        return (
            <Provider store={store}>
           <Fragment>
                <Header/>
                <div id='container'>
                    <Dashboard/>
                </div>
            </Fragment>
            </Provider>


            )

    }

    
}

ReactDOM.render(<App/>, document.getElementById('app'));

