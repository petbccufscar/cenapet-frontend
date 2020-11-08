export default ({ app }, inject) => {
    inject("formatDate", date => {
        //2018-08-25
        const day = date.substring(8, 10);
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);

        const formattedDate = day + "/" + month + "/" + year;

        return formattedDate;
    })
}