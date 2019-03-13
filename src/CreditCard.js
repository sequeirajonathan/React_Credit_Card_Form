import React from 'react';
import './index.css';

class CreditCard extends React.Component {
    render() {
        let {account, brand, chip,expMonth, expYear} = this.props.card;

        let chipJSX = null;
        
        if (chip === 'true') {
            chipJSX = (
                <div className="chip">
                    <div className="chip-inner">&nbsp;</div>
                </div>
            )
        }

        return (
            <div className="credit-card">
                {chipJSX}
                <div className="brand">
                    <i className={`fa fa-cc-${brand} fa-3x`}></i>
                </div>
                <div className="number">{account}</div>
                <div className="validity">
                    MONTH/YEAR<br />
                    valid thru <span className="valid">{expMonth + " / " + expYear}</span>
                </div>
            </div>
        )
    }
}

export default CreditCard;