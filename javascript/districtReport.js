const summaryAPI = "https://data.covid19india.org/state_district_wise.json";

$(document).ready(function () {
    $.getJSON(summaryAPI, function (res) {
        for(var state in res) {
            var newState = '<option value="' + res[state].state_id + '" name="' + state + '">' + state + '</option>';
            $('#state').append(newState);
        }
    });

    $('#state').change(function () {
        var stateName = $(this).children("option:selected").text();
        $.getJSON(summaryAPI, function (data) {
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