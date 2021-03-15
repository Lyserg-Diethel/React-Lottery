import { generateRandomNumber } from "./utils.js";
import { generateRandomColor } from "./utils.js";

export function createTicket() {
  const ticket = {
    number: generateRandomNumber(1, 10),
    bgColor: generateRandomColor(),
    index: this.state.purchasedTickets.length
  };
  this.setState((prevState) => {
    let newArr = prevState.purchasedTickets.map((item) => item);
    newArr.push(ticket);
    return {
      purchasedTickets: newArr,
      remainingTickets: prevState.remainingTickets - 1
    };
  });
}

export function deleteTicket(index) {
  this.setState((prevState) => {
    const ticketsArr = prevState.purchasedTickets;
    const filteredArray = ticketsArr.filter(
      (ticket) => ticketsArr.indexOf(ticket) !== index
    );
    return {
      purchasedTickets: filteredArray,
      remainingTickets: this.state.remainingTickets + 1
    };
  });
}

export function endLottery() {
  this.setState({ final: true });
}

export function resetLottery() {
  this.setState((prevState) => {
    return {
      winningNumber: generateRandomNumber(1, 10),
      remainingTickets: 5,
      purchasedTickets: [],
      final: false
    };
  });
}
