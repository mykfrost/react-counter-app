import React, { Component } from 'react';
import { ReactComponentElement } from 'react';


class Counter extends React.Component {
    state = { 

        count : 0 ,
        tags:['tag1', 'tag2' , 'tag3']

         } ;

       

    render() { 
       
        return (
        
            <div>
           
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            </div>
            );
    
    }



    //remember to put these methds outside render function

     getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        //using object destructuring
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;