import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value
    };

   handleIncrement= () => {
      this.setState({ value : this.state.count + 1});
    };

    render() { 
        
        return (
         <div>
             {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? <h1>Zero</h1> : value;
    }


}
 
export default Counter;