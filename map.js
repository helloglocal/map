var svg = d3.select("body")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100vh")
    .style("cursor", "url(cursor.png), auto")
    .attr("viewBox", `0 0 960 600`) 
    .attr("preserveAspectRatio", "xMidYMid meet");

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .style("fill", "url(#text-fill)");

svg.append("foreignObject")
    .attr("width", 960)
    .attr("height", 600)
    .append("xhtml:div")
    .style("font-size", "5em")
    .style("height", "100%")
    .style("word-wrap", "break-word")
    .style("text-align", "center")
    .style("color", "#0a4dea")
    .style("position", "relative")
    .style("top", "6rem")
    .text("Around The World in 250 Coworking Spaces");

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
        .attr("fill", "#517fe591")
        .attr("stroke", "white");

    // Load default data
    loadData("countries.json");
});

function loadData(file) {
    d3.json(file).then(function(data) {
        // Clear previous data
        svg.selectAll(".cursor").remove();

        // Add custom cursors
        svg.selectAll("customCursor")
            .data(data)
            .enter()
            .append("image")
            .attr("class", "cursor")  // for identification, optional
            .style("border", "1px solid white")  // optional
            .attr("xlink:href", "yellowdot.svg")  // cursor.png URL of your PNG image
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
                div.html("<img src=" + d.flag + " width='64' height='64' /><br/>" + d.country)
                    .style("left", (event.clientX + 10) + "px") // Updated
                    .style("top", (event.clientY - 80) + "px"); // Updated
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    });
}

// Handle selection change event
d3.select("#dropdown").on("change", function () {
    // Get selected option
    var selectedOption = d3.select(this).property("value");

    // Choose the file based on selected option
    var file = selectedOption === "bookSales" ? "countries.json" : "spaces.json";

    // Load data
    loadData(file);
});

function zoomed(event) {
    svg.selectAll(".map, .cursor").attr("transform", event.transform);
}

function updateProjection() {
    var width = parseInt(svg.style("width"));
    var height = parseInt(svg.style("height"));
    projection
        .translate([width / 2, height / 2])
        .scale(Math.min(width, height));
}

// Call this function when the window is resized
window.onresize = updateProjection;