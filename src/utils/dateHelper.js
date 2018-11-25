export function getFormattedDateTime(inDate) {
    const date =  new Date(inDate);
    return `${date.getMonth() + 1}/${date.getDate()} /${date.getFullYear()}`;
  }
  
  export function padLeadingZero(value) {
    return value > 9 ? value : `0${value}`;
  }
  