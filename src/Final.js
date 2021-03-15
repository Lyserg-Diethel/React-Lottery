import React from "react";
import { generateRandomColor } from "./Helpers/utils"
import { Button, Card } from 'antd';

class Final extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let guessedStatus;
    for (let tkt of this.props.purchasedTickets) {
      if (tkt.number === this.props.winningNumber) {
        guessedStatus = "";
        break;
      } else {
        guessedStatus = " NOT";
      }
    }
    return (
      <Card 
        className="finalCard"
        style={{backgroundColor: generateRandomColor()}}
        title={
          <div>
            <h2>Winning number{guessedStatus} guessed!</h2>
            <p>The lucky number was: {this.props.winningNumber}</p>
          </div>
          }
        >
        
        
        <Button block type="danger" onClick={this.props.actions.resetLottery}>Start another draw</Button>
      </Card>
    );
  }
}

export default Final;
