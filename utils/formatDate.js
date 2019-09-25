module.exports = trips => {
    let tripsWithFormattedDate = trips.map(trip => {
        const formattedStartDate = trip.start_date
            .toString()
            .split('00:00:00')[0]
            .trim();
        const formattedEndDate = trip.end_date
            .toString()
            .split('00:00:00')[0]
            .trim();

        return { ...trip, start_date: formattedStartDate, end_date: formattedEndDate };
    });

    return tripsWithFormattedDate;
};
