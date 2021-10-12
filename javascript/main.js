const getState = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
const getDistrictBaseAPI = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
// const summaryAPI = "https://api.covid19api.com/summary";
const summaryAPI = "https://api.rootnet.in/covid19-in/stats/latest";

$(document).ready(function() {
    $.getJSON(summaryAPI, function(res) {
        
        const confirmedData = '<h2 class="confirmed_cases">' + res['data'].summary.total + '</h2>';
        const deathData = '<h2 class="death_cases">' + res['data'].summary.deaths + '</h2>';
        const recoveredData = '<h2 class="recovered_cases">' + res['data'].summary.discharged + '</h2>';
        // console.log(res['data'].TotalRecovered);
        $(".confirmed_card").append(confirmedData);
        $(".death_card").append(deathData);
        $(".recovered_card").append(recoveredData);

        var i = 0;
        while(res['data'].regional[i] != undefined) {
            var newRow = "<tr>" + 
                            "<td>" + res['data'].regional[i].loc + "</td>" + 
                            "<td>" + res['data'].regional[i].deaths + "</td>" + 
                            "<td>" + res['data'].regional[i].totalConfirmed + "</td>" + 
                        "</tr>";
            
            $("table").append(newRow);
            i++;
        }
    });
});