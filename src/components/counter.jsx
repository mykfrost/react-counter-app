import React, { Component } from 'react';



class Counter extends Component {
         state = { 

        value : this.props.counter.value 

         } ;  

       

    render() { 
      // console.log('props',this.props);
        return (         
            <div>
        
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}</span>
            <button
             onClick= {()=> this.props.onIncrement(this.props.counter)          
            }
             className='btn btn-secondary btn-sm'
             >
                Increment
             </button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)}
             className='btn btn-danger btn-sm m-2'>
                Delete
            </button>
            </div>
            );
    
    }

  

    //remember to put these methds outside render function
    // handleIncrement = () => {
    //     this.setState({value : this.state.value + 1});
    // };

     getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        //using object destructuring
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;