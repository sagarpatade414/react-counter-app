import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if(this.state.tags.length === 0) {
            return <p>There are no tags </p>; 
        } else {
            return <ul> {this.state.tags.map( (item) => <li key={item}> { item }</li> )} </ul>;
        }
    }
    render() { 
        return (
         <div>
             {this.renderTags()}
        </div>
        );
    }

    


}
 
export default Counter;