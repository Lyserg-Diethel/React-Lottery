import React from "react";
import { Button, Card, Typography } from 'antd';

const {Title} = Typography;

class Ticket extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    console.log("Deleting button.");
  };

  render(props) {
    return (
      <Card
        className="ticketBox"
        number={this.props.number}
        style={{ backgroundColor: this.props.bgColor }}
        size="small"
        title="Ticket"
      > 
        <Title> {this.props.number}</Title>
        <Button
          block
          onClick={() => {
            this.props.actions.deleteTicket(this.props.index);
          }}
        >
          X
        </Button>{" "}
      </Card>
    );
  }
}

export default Ticket;
