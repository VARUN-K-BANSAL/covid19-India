const summaryAPI = "https://data.covid19india.org/state_district_wise.json";
const stateAPI = "https://cdn-api.co-vin.in/api/v2/admin/location/states";

$(document).ready(function () {
    $.getJSON(stateAPI, function (res) {
        var i = 0;
        console.log(res['states'][0]);
        while (res['states'][i] != undefined) {
            var newState = '<option value="' + res['states'][i].state_id + '" name="' + res['states'][i].state_name + '">' + res['states'][i].state_name + '</option>';
            $('#state').append(newState);
            i++;
        }
    });

    $('#state').change(function () {
        var stateName = $(this).children("option:selected").text();
        $.getJSON(summaryAPI, function (data) {
            // console.log(data);
            // removing the rows except the first heading
            $("table").find("tr:not(:first)").remove();

            for (var districtName in data[stateName].districtData) {
                var newRow = "<tr>" +
                    "<td>" + districtName + "</td>" +
                    "<td>" + data[stateName].districtData[districtName].recovered + "</td>" +
                    "<td>" + data[stateName].districtData[districtName].confirmed + "</td>" +
                    "<td>" + data[stateName].districtData[districtName].active + "</td>" +
                    "</tr>";

                $("table").append(newRow);
            }
        });
    });
});