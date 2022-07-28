import logo from './logo.svg';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React from 'react';

function App() {
  state = {  
    counters : [
        {id: 1 , value : 4},
        {id: 2 , value : 0},
        {id: 3 , value : 0},
        {id: 4 , value : 0}
    ]
} ;
  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    //update the state
    this.setState({counters});
};
handleDelete = (counterId) =>{
const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});

};
handleReset =()=>{
    const counters = this.state.counters.map(c =>{
        c.value = 0;
        return c;
    });
    this.setState({counters});
}
  return (
 <React.Fragment>
   <NavBar/>
   <main className='container'>
    <Counters></Counters>
   </main>
 </React.Fragment>

  );
}

export default App;
