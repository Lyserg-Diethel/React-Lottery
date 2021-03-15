import React from "react";
import Ticket from "./Ticket.js";
import { Button, Typography, Divider } from 'antd';

const {Title} = Typography;

class Lottery extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  renderButton() {
    if (this.props.remainingTickets > 0) {
      return (
        <Button type='primary' onClick={this.props.actions.createTicket}>Get Ticket</Button>
      );
    } else {
      return (
        <Button type='primary' onClick={this.props.actions.endLottery}>Check Result</Button>
      );
    }
  }
  render() {
    const ticketActions = { deleteTicket: this.props.actions.deleteTicket };
    let renderArr = this.props.purchasedTickets.map((tkt, index) => (
      <Ticket
        number={tkt.number}
        bgColor={tkt.bgColor}
        index={index}
        key={index}
        actions={ticketActions}
      />
    ));

    return (
      <div className="lottery">
        <Title>Lottery</Title>
        {this.renderButton()}
        <br />
        <small>Remaining tickets: {this.props.remainingTickets}</small>
        <Divider>Purchased Tickets:</Divider>
        {renderArr}
      </div>
    );
  }
}

export default Lottery;
