const zeroFill = (number: number) => {
    return number >= 10 ? number : `0${number}`;
};

const formatDateTime = (value: string) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1);
    const day = zeroFill(date.getDate());
    const hours = zeroFill(date.getHours());
    const minutes = zeroFill(date.getMinutes());
    const seconds = zeroFill(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = {
    zeroFill,
    formatDateTime,
};
