import React from 'react';
import './index.css';

class InputForm extends React.Component {

    render() {

        return (
            <div className="form-container">
                <form className="ui form">
                    <h4 className="ui dividing header">Credit Card Information</h4>
                    <div className="field">
                        <select onChange={this.props.changeType} className = "ui fluid search dropdown" name="card[type]">
                            <option value>Card Type</option>
                            <option value="amex">Amex</option>
                            <option value="discover">Discover</option>
                            <option value="jcb">JCB</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="paypal">Paypal</option>
                            <option value="stripe">Stripe</option>
                            <option value="visa">Visa</option>
                            <option value="wallet">Google Wallet</option>
                        </select>
                    </div>
                    <div className="field">
                        <select  onChange={this.props.changeChip} className = "ui fluid search dropdown" name="card[chip]">
                            <option value>Does the card have a chip?</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <div className="fields">
                        <div className="seven wide field">
                            <label>Card Number</label>
                            <input  onChange={this.props.changeAccount} type="text" name="card[number]" maxLength={16} placeholder="Card #" />
                        </div>
                        <div className="six wide field">
                            <label>Expiration</label>
                            <div className="two fields">
                                <div className="field">
                                    <select onChange={this.props.changeMonth} className="ui fluid search dropdown" name="card[expire-month]">
                                        <option value>Month</option>
                                        <option value={1}>January</option>
                                        <option value={2}>February</option>
                                        <option value={3}>March</option>
                                        <option value={4}>April</option>
                                        <option value={5}>May</option>
                                        <option value={6}>June</option>
                                        <option value={7}>July</option>
                                        <option value={8}>August</option>
                                        <option value={9}>September</option>
                                        <option value={10}>October</option>
                                        <option value={11}>November</option>
                                        <option value={12}>December</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <input onChange={this.props.changeYear} type="text" name="card[expire-year]" maxLength={4} placeholder="Year" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default InputForm;