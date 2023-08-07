export const  calculateAge = () => {
    const msDifference = Date.now() - new Date(1999, 12, 2).getTime();
    const msDifferenceDate = new Date(msDifference);

    return Math.abs(msDifferenceDate.getUTCFullYear() - 1970);
}