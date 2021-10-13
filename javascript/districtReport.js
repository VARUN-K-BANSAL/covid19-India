const summaryAPI = "https://data.covid19india.org/state_district_wise.json";

$(document).ready(function() {
    $.getJSON(summaryAPI, function(res) {
        var i = 0;

        console.log(res);
        // var data = JSON.parse(res);
        console.log(JSON.parse(res));
        while(res[i] != undefined) {
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