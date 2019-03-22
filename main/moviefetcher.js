let xhttp = new XMLHttpRequest();
console.log("TEST");
xhttp.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");
xhttp.responseType = 'text';
let textContent;
xhttp.onload = function() {
    textContent = xhttp.response;
    console.log(textContent);
    let data = JSON.parse(textContent);
    let movies = data["data"];
    movies = movies.filter(x => x[10] == "Golden Gate Bridge").map(x =>
        "<li>"+x[8]+", in "+x[9]+" by "+x[12]+"</li>"
    );
    let response = "<ul>"+(movies.join("\n"))+"</ul>";
    document.getElementById('result').innerHTML += response;
};
xhttp.send();