module.exports = trips => {
    let tripsWithFormattedDate = trips.map(trip => {
        let monthLegend = {
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

        let startMonth;
        let startDay;
        let startYear;

        let endMonth;
        let endDay;
        let endYear;

        let startDate = trip.start_date
            .toString()
            .split('00:00:00')[0]
            .trim()
            .split(' ');
        let endDate = trip.end_date
            .toString()
            .split('00:00:00')[0]
            .trim()
            .split(' ');

        startMonth = monthLegend[startDate[1]];
        startDay = startDate[2];
        startYear = startDate[3];

        endMonth = monthLegend[endDate[1]];
        endDay = endDate[2];
        endYear = endDate[3];

        formattedStartDate = `${startMonth} ${startDay}, ${startYear}`;
        formattedEndDate = `${endMonth} ${endDay}, ${endYear}`;

        return { ...trip, start_date: formattedStartDate, end_date: formattedEndDate };
    });

    return tripsWithFormattedDate;
};
