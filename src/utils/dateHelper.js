export function getFormattedDateTime(inDate) {
    let date =  new Date(inDate)
    return `${date.getMonth() + 1}/${date.getDate()} /${date.getFullYear()}`;
    //${date.getHours()}:${padLeadingZero(date.getMinutes())}:${padLeadingZero(date.getSeconds())}`;
  }
  
  export function padLeadingZero(value) {
    return value > 9 ? value : `0${value}`;
  }
  