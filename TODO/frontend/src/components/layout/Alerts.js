import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

export  class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired


  }
  //when we get a new prop such as the error this will run
    componentDidUpdate(prevProps){
        // this.props.alert.show("Works");
        const {error, alert} = this.props;

        if(error !== prevProps.error){
          if(error.msg.status){

            alert.error('Status is Required');
          }
          if(error.msg.text){

            alert.error('Text is Required');
          }
        }
    }


  render() {
    return <Fragment/>;
     
   
    
  }
}
const mapStateToProps = state =>({
  error: state.errors                   //mapping the state to the reducer

});

export default connect(mapStateToProps)(withAlert()(Alerts)); 
