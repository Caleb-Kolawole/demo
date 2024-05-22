// utils.js
export const timestampConverter = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().substr(-2); // Get the last two digits of the year
    return `${day}-${month}-${year}`;
  };
  