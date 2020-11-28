export default ({ app }, inject) => {
    inject("formatDate", date => {
        //2018-08-25
        const day = date.substring(8, 10);
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);

        const formattedDate = day + "/" + month + "/" + year;

        return formattedDate;
    }),
    inject("paginate", (array, page_size) => {
        if (page_size < 1) page_size = 1;

        const total_pages = Math.ceil(array.length / page_size);

        let paginated_array = [];

        for (let page_number = 0; page_number < total_pages; page_number++) {
            let page = [];

            for (let item_number = 0; item_number < page_size; item_number++) {

                const item = array[(page_number * page_size) + item_number];

                if (item) page[item_number] = item;

            }

            paginated_array[page_number] = page;

        }

        return paginated_array;

    })
}