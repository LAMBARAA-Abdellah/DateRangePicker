var today = new Date();
var defaultDateLimit = 10;
var defaultPastDate = new Date(new Date().setDate(today.getDate() - defaultDateLimit));


let dateStart;
$('input[name="daterange"]').daterangepicker(
    {

        "showDropdowns": true,
        "autoApply": true,
        "dateLimit": {
            "days": 10
        },

        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        },
        "startDate": defaultPastDate,
        "endDate": today
    },
    function (start, end, label) {
        //date fin - date debut
        var diff = end - start;
        var days = diff / 1000 / 60 / 60 / 24;
        var nbJours = Math.round(days);
        console.log("ha lbadya", start.format('YYYY-MM-DD'));
        console.log("ha nihaya", end.format('YYYY-MM-DD'));

        dateStart = start.format('YYYY-MM-DD');

        startdateforma();
        //   alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    },


    //   alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'))
);
var startdateforma = () => {
    console.log("start date :", dateStart);
}

