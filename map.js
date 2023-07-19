var svg = d3.select("body")
    .append("svg")
    .attr("width", 960)
    .attr("height", 600);

var projection = d3.geoNaturalEarth1();
var path = d3.geoPath().projection(projection);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on("zoom", zoomed);

svg.call(zoom);

d3.json("https://d3js.org/world-110m.v1.json").then(function (world) {
    svg.append("path")
        .datum(topojson.feature(world, world.objects.countries))
        .attr("d", path)
        .attr("class", "map")
        // .attr("fill", "#f9b233")
        // .attr("stroke", "#517fe5");
        .attr("fill", "#517fe5")
        .attr("stroke", "white");

    var data = [
        {
            "code": "GB",
            "name": "United Kingdom",
            "lat": 55.3781,
            "long": -3.4360,
            "continent": "Europe",
            "flag": "https://flagcdn.com/gb.svg"
        },
        {
            "code": "US",
            "name": "United States",
            "lat": 37.0902,
            "long": -95.7129,
            "continent": "North America",
            "flag": "https://flagcdn.com/us.svg"
        },
        {
            "code": "DE",
            "name": "Germany",
            "lat": 51.1657,
            "long": 10.4515,
            "continent": "Europe",
            "flag": "https://flagcdn.com/de.svg"
        },
        {
            "code": "AT",
            "name": "Austria",
            "lat": 47.5162,
            "long": 14.5501,
            "continent": "Europe",
            "flag": "https://flagcdn.com/at.svg"
        },
        {
            "code": "ES",
            "name": "Spain",
            "lat": 40.4637,
            "long": -3.7492,
            "continent": "Europe",
            "flag": "https://flagcdn.com/es.svg"
        },
        {
            "code": "BE",
            "name": "Belgium",
            "lat": 50.5039,
            "long": 4.4699,
            "continent": "Europe",
            "flag": "https://flagcdn.com/be.svg"
        },
        {
            "code": "CH",
            "name": "Switzerland",
            "lat": 46.8182,
            "long": 8.2275,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ch.svg"
        },
        {
            "code": "FR",
            "name": "France",
            "lat": 46.6034,
            "long": 1.8883,
            "continent": "Europe",
            "flag": "https://flagcdn.com/fr.svg"
        },
        {
            "code": "JP",
            "name": "Japan",
            "lat": 36.2048,
            "long": 138.2529,
            "continent": "Asia",
            "flag": "https://flagcdn.com/jp.svg"
        },
        {
            "code": "PT",
            "name": "Portugal",
            "lat": 39.3999,
            "long": -8.2245,
            "continent": "Europe",
            "flag": "https://flagcdn.com/pt.svg"
        },
        {
            "code": "AU",
            "name": "Australia",
            "lat": -25.2744,
            "long": 133.7751,
            "continent": "Oceania",
            "flag": "https://flagcdn.com/au.svg"
        },
        {
            "code": "RO",
            "name": "Romania",
            "lat": 45.9432,
            "long": 24.9668,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ro.svg"
        },
        {
            "code": "SE",
            "name": "Sweden",
            "lat": 60.1282,
            "long": 18.6435,
            "continent": "Europe",
            "flag": "https://flagcdn.com/se.svg"
        },
        {
            "code": "BA",
            "name": "Bosnia and Herzegovina",
            "lat": 43.9159,
            "long": 17.6791,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ba.svg"
        },
        {
            "code": "IN",
            "name": "India",
            "lat": 20.5937,
            "long": 78.9629,
            "continent": "Asia",
            "flag": "https://flagcdn.com/in.svg"
        },
        {
            "code": "BG",
            "name": "Bulgaria",
            "lat": 42.7339,
            "long": 25.4858,
            "continent": "Europe",
            "flag": "https://flagcdn.com/bg.svg"
        },
        {
            "code": "NZ",
            "name": "New Zealand",
            "lat": -40.9006,
            "long": 174.8860,
            "continent": "Oceania",
            "flag": "https://flagcdn.com/nz.svg"
        },
        {
            "code": "CA",
            "name": "Canada",
            "lat": 56.1304,
            "long": -106.3468,
            "continent": "North America",
            "flag": "https://flagcdn.com/ca.svg"
        },
        {
            "code": "IT",
            "name": "Italy",
            "lat": 41.8719,
            "long": 12.5674,
            "continent": "Europe",
            "flag": "https://flagcdn.com/it.svg"
        },
        {
            "code": "DK",
            "name": "Denmark",
            "lat": 56.2639,
            "long": 9.5018,
            "continent": "Europe",
            "flag": "https://flagcdn.com/dk.svg"
        },
        {
            "code": "FI",
            "name": "Finland",
            "lat": 61.9241,
            "long": 25.7482,
            "continent": "Europe",
            "flag": "https://flagcdn.com/fi.svg"
        },
        {
            "code": "UA",
            "name": "Ukraine",
            "lat": 48.3794,
            "long": 31.1656,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ua.svg"
        },
        {
            "code": "NL",
            "name": "Netherlands",
            "lat": 52.1326,
            "long": 5.2913,
            "continent": "Europe",
            "flag": "https://flagcdn.com/nl.svg"
        },
        {
            "code": "MX",
            "name": "Mexico",
            "lat": 23.6345,
            "long": -102.5528,
            "continent": "North America",
            "flag": "https://flagcdn.com/mx.svg"
        },
        {
            "code": "BR",
            "name": "Brazil",
            "lat": -14.2350,
            "long": -51.9253,
            "continent": "South America",
            "flag": "https://flagcdn.com/br.svg"
        },
        {
            "code": "PL",
            "name": "Poland",
            "lat": 51.9194,
            "long": 19.1451,
            "continent": "Europe",
            "flag": "https://flagcdn.com/pl.svg"
        },
        {
            "code": "NO",
            "name": "Norway",
            "lat": 60.4720,
            "long": 8.4689,
            "continent": "Europe",
            "flag": "https://flagcdn.com/no.svg"
        },
        {
            "code": "SI",
            "name": "Slovenia",
            "lat": 46.0569,
            "long": 14.5058,
            "continent": "Europe",
            "flag": "https://flagcdn.com/si.svg"
        },
        {
            "code": "PH",
            "name": "Philippines",
            "lat": 13.41,
            "long": 122.56,
            "continent": "Asia",
            "flag": "https://flagcdn.com/ph.svg"
        },
        {
            "code": "HK",
            "name": "Hong Kong",
            "lat": 22.3193,
            "long": 114.1694,
            "continent": "Asia",
            "flag": "https://flagcdn.com/hk.svg"
        },
        {
            "code": "SK",
            "name": "Slovakia",
            "lat": 48.1486,
            "long": 17.1077,
            "continent": "Europe",
            "flag": "https://flagcdn.com/sk.svg"
        },
        {
            "code": "AE",
            "name": "United Arab Emirates",
            "lat": 24.4539,
            "long": 54.3773,
            "continent": "Asia",
            "flag": "https://flagcdn.com/ae.svg"
        },
        {
            "code": "RU",
            "name": "Russia",
            "lat": 55.75,
            "long": 37.6167,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ru.svg"
        },
        {
            "code": "TR",
            "name": "Turkey",
            "lat": 39.9334,
            "long": 32.8597,
            "continent": "Asia",
            "flag": "https://flagcdn.com/tr.svg"
        },
        {
            "code": "CZ",
            "name": "Czech Republic",
            "lat": 50.0736,
            "long": 14.4183,
            "continent": "Europe",
            "flag": "https://flagcdn.com/cz.svg"
        },
        {
            "code": "AL",
            "name": "Albania",
            "lat": 41.3275,
            "long": 19.8187,
            "continent": "Europe",
            "flag": "https://flagcdn.com/al.svg"
        },
        {
            "code": "IE",
            "name": "Ireland",
            "lat": 53.3498,
            "long": -6.2603,
            "continent": "Europe",
            "flag": "https://flagcdn.com/ie.svg"
        },
        {
            "code": "EG",
            "name": "Egypt",
            "lat": 30.0444,
            "long": 31.2357,
            "continent": "Africa",
            "flag": "https://flagcdn.com/eg.svg"
        },
        {
            "code": "LV",
            "name": "Latvia",
            "lat": 56.9496,
            "long": 24.1052,
            "continent": "Europe",
            "flag": "https://flagcdn.com/lv.svg"
        },
        {
            "code": "HU",
            "name": "Hungary",
            "lat": 47.4979,
            "long": 19.0402,
            "continent": "Europe",
            "flag": "https://flagcdn.com/hu.svg"
        },
        {
            "code": "VN",
            "name": "Vietnam",
            "lat": 21.0285,
            "long": 105.8542,
            "continent": "Asia",
            "flag": "https://flagcdn.com/vn.svg"
        },
        {
            "code": "GR",
            "name": "Greece",
            "lat": 39.0742,
            "long": 21.8243,
            "continent": "Europe",
            "flag": "https://flagcdn.com/gr.svg"
        },
        {
            "code": "LU",
            "name": "Luxembourg",
            "lat": 49.8153,
            "long": 6.1296,
            "continent": "Europe",
            "flag": "https://flagcdn.com/lu.svg"
        },
        {
            "code": "KR",
            "name": "South Korea",
            "lat": 35.9078,
            "long": 127.7669,
            "continent": "Asia",
            "flag": "https://flagcdn.com/kr.svg"
        },
        {
            "code": "MY",
            "name": "Malaysia",
            "lat": 4.2105,
            "long": 101.9758,
            "continent": "Asia",
            "flag": "https://flagcdn.com/my.svg"
        },
        {
            "code": "TW",
            "name": "Taiwan",
            "lat": 23.6978,
            "long": 120.9605,
            "continent": "Asia",
            "flag": "https://flagcdn.com/tw.svg"
        },
        {
            "code": "IL",
            "name": "Israel",
            "lat": 31.0461,
            "long": 34.8516,
            "continent": "Asia",
            "flag": "https://flagcdn.com/il.svg"
        },
        {
            "code": "GE",
            "name": "Georgia",
            "lat": 42.3154,
            "long": 43.3569,
            "continent": "Asia",
            "flag": "https://flagcdn.com/ge.svg"
        },
        {
            "code": "ZA",
            "name": "South Africa",
            "lat": -30.5595,
            "long": 22.9375,
            "continent": "Africa",
            "flag": "https://flagcdn.com/za.svg"
        },
        {
            "code": "CN",
            "name": "China",
            "lat": 35.8617,
            "long": 104.1954,
            "continent": "Asia",
            "flag": "https://flagcdn.com/cn.svg"
        }
    ]

    // Add custom cursors
    svg.selectAll("customCursor")
        .data(data)
        .enter()
        .append("image")
        .attr("class", "cursor")  // for identification, optional
        .attr("xlink:href", "cursor.png")  // URL of your PNG image
        .attr("x", function (d) {
            return projection([d.long, d.lat])[0];
        })
        .attr("y", function (d) {
            return projection([d.long, d.lat])[1];
        })
        .attr("width", 20) // you can adjust the width and height to fit your needs
        .attr("height", 20)
        .on("mouseover", function (event, d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html("<img src=" + d.flag + " width='64' height='64' /><br/>" + d.name)
                .style("left", (event.pageX + 10) + "px")  // Updated
                .style("top", (event.pageY - 80) + "px");  // Updated
        })
        .on("mouseout", function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });
});

function zoomed(event) {
    svg.selectAll(".map, .cursor").attr("transform", event.transform);
}