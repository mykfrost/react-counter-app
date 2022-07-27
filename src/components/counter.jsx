import React, { Component } from 'react';

class Counter extends Component {
    state = { 

        count : 0 ,

         } ;

         styles = {
            fontSize : 10 ,
            fontWeight: 'bold'
         };

    render() { 
        return (
        
            <React.Fragment>
           
            <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            </React.Fragment>
            );
    }
    formatCount(){
        //using object destructuring
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;