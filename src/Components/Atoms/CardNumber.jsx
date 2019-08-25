import React from 'react';
import { numberWithCommas } from '../vendors';

class CardNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: false
        };
        this.amount = props.amount;
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState(prevState => (
            { flip: !prevState.flip }
        ));

    }
    render() {
        return (
            <div className={`h4 ${this.props.classes} card card-shadow hover:bg-${this.props.hover} text-center bg-${this.props.bg} text-${this.props.color} mb-1`} onClick={this.flipCard}>
                <p className={`mb-1`}>{`$${numberWithCommas(this.props.amount).toString()}`}</p>
                <p className="">{this.props.text}</p>
            </div>
        );
    }
}

export default CardNumber;