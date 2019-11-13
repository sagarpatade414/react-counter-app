import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters : [
            {id: 1, value: 4 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
    };

    handleDelete = (counterId) => {
        console.log("Event handler called", counterId);
    };

    render() { 
        
        return ( <div> 
            {this.state.counters.map( item =>  
            <Counter key={ item.id } onDelete={this.handleDelete} value={ item.value} > 
                <h4>Counter #{item.id}</h4>
            </Counter>
            )};
        </div> );
    }
}
 
export default Counters;