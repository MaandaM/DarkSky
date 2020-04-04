$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    $("#jobSearch").keyup(function () {
        var valueToSearch = $("#jobSearch").val();

        if (valueToSearch != "") {
            $.ajax({
                url: "/static/weather/mapbox.py",
                data: {
                    valueToSearch: valueToSearch
                },
                method: "GET",
                contentType: "application/json",
                dataType: "json",
                success: function (data) {

                    alert(data);

                    var results = "<ul class='list-unstyled jobTList'>";
                    if (data.features.length > 0) {
                        for (var i = 0; i < data.features.length; i++) {
                            var coordinates = '' + data.features[i].center[1] + ',' + data.features[i].center[0] + '';
                            results = results + "<li class = 'jobTListItem' id='" + coordinates + "'>" + data.features[i].place_name + "</li>"
                        }
                    } else {
                        results = results + "<li class = 'jobTListItem'>Address Not Found</li>"
                    }
                    results = results + "</ul>"

                    $("#jobTitleList").fadeIn();
                    $("#jobTitleList").html(results);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                    alert(textStatus);

                }
            });
        } else {
            $("#jobTitleList").fadeOut();
        }
    });

    $(document).on("click", ".jobTListItem", function () {
        $("#jobSearch").val($(this).text());
        var selectedValue = $(this).text();
        var coordinates = $(this).attr("id");
        $("#jobTitleList").fadeOut();

        $.ajax({
            // url: "https://api.darksky.net/forecast/9fb7405b3caffe25cbdd66924b8d70b7/" +
            //     coordinates +
            //     "?exclude=hourly,daily,flags",
            method: "GET",
            contentType: "application/json",
            dataType: "jsonp",
            success: function (data) {
                if (data.currently.icon == "clear-day") {
                    $("#weathIcon").addClass("fa-sun");
                } else if (data.currently.icon == "clear-night") {
                    $("#weathIcon").addClass("fa-moon");
                } else if (data.currently.icon == "rain") {
                    $("#weathIcon").addClass("fa-cloud-rain");
                } else if (data.currently.icon == "snow") {
                    $("#weathIcon").addClass("fa-snowflake");
                } else if (data.currently.icon == "sleet") {
                    $("#weathIcon").addClass("fa-cloud-showers-heavy");
                } else if (data.currently.icon == "wind") {
                    $("#weathIcon").addClass("fa-wind");
                } else if (data.currently.icon == "fog") {
                    $("#weathIcon").addClass("fa-smog");
                } else if (data.currently.icon == "cloudy") {
                    $("#weathIcon").addClass("fa-cloud");
                } else if (data.currently.icon == "partly-cloudy-day") {
                    $("#weathIcon").addClass("fa-cloud-sun");
                } else {
                    $("#weathIcon").addClass("fa-cloud-moon");
                }

                $("#result_temp").text(data.currently.temperature);
                $("#result_address").text(selectedValue);
                $("#result_ap_temp").text(
                    "Apparent Temperature: " + data.currently.apparentTemperature
                );
                $("#result_windsp").text(
                    "Wind Speed: " + data.currently.windSpeed + "mph"
                );
                $("#result_humid").text("Humidity: " + data.currently.humidity + "%");
                $("#result_summ").text(data.currently.summary);

                $("#precInt").text(
                    "precipitation Intensity: " + data.currently.precipIntensity
                );
                $("#precProb").text(
                    "precipitation Probability: " + data.currently.precipProbability
                );
                $("#dewPoint").text("Dew Point: " + data.currently.dewPoint);
                $("#pressure").text("Pressure: " + data.currently.pressure + "mbar");

                $("#windGust").text("wind Gust: " + data.currently.windGust);
                $("#windBearing").text("Wind Bearing: " + data.currently.windBearing);
                $("#cloudCover").text(
                    "Cloud Cover: " + data.currently.cloudCover + "%"
                );

                //form
                $("#saveAddress").val(selectedValue);
                $("#saveTemp").val(data.currently.temperature);
                $("#saveSum").val(data.currently.summary);
                $("#saveIcon").val(data.currently.icon);

                $("#defaultDiv").hide();
                $("#resultsDiv").removeAttr("hidden");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
                alert(textStatus);
            }
        });
    });
});