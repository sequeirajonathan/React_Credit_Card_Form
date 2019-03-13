import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './CreditCard';
import InputForm from './InputForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            account: '',
            chip: null,
            expMonth: '',
            expYear: ''
        };
        
    }

    typeHandle = (event) => {
        this.setState(
            {
               brand: event.target.value
            }
        )
    }

    chipHandle = (event) => {
        console.log(this.state.chip)
        this.setState(
            {
               chip: event.target.value
            }
        )
    }

    accountHandle = (event) => {
        console.log(this.state.chip)
        this.setState(
            {
               account: event.target.value
            }
        )
    }

    monthHandle = (event) => {
        console.log(this.state.chip)
        this.setState(
            {
               expMonth: event.target.value
            }
        )
    }

    yearHandle = (event) => {
        console.log(this.state.chip)
        this.setState(
            {
               expYear: event.target.value
            }
        )
    }

    render() {
        let card = this.state;
        return (
            <div className="container">
                < CreditCard card={card}/>
                <InputForm  card={card} 
                changeType={this.typeHandle} 
                changeChip={this.chipHandle}
                changeAccount={this.accountHandle}
                changeMonth={this.monthHandle}
                changeYear={this.yearHandle}
                
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));