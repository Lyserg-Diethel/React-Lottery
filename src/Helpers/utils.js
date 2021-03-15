export const generateRandomNumber = (start, end) => {
    //includes start and end numbers.
    let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    return randomNumber;
  };
  
  export const generateRandomColor = () => {
    return `rgb(${generateRandomNumber(100, 255)} ${generateRandomNumber(
      0,
      255
    )} ${generateRandomNumber(0, 255)})`;
  };
  