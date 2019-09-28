module.exports = trips => {
    const tripsWithFormattedDate = trips.map(trip => {
        const monthLegend = {
            Jan: 'January',
            Feb: 'February',
            Mar: 'March',
            Apr: 'April',
            May: 'May',
            Jun: 'June',
            Jul: 'July',
            Aug: 'August',
            Sep: 'September',
            Oct: 'October',
            Nov: 'November',
            Dec: 'December'
        };

        const startDate = trip.start_date
            .toString()
            .split('00:00:00')[0]
            .trim()
            .split(' ');
        const endDate = trip.end_date
            .toString()
            .split('00:00:00')[0]
            .trim()
            .split(' ');

        const startMonth = monthLegend[startDate[1]];
        const startDay = startDate[2];
        const startYear = startDate[3];

        const endMonth = monthLegend[endDate[1]];
        const endDay = endDate[2];
        const endYear = endDate[3];

        const formattedStartDate = `${startMonth} ${startDay}, ${startYear}`;
        const formattedEndDate = `${endMonth} ${endDay}, ${endYear}`;

        return { ...trip, start_date: formattedStartDate, end_date: formattedEndDate };
    });

    return tripsWithFormattedDate;
};
