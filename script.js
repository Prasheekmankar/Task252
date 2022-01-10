


document.querySelector(".info").innerHTML =
    `<label for="catSearch"><h1>Enter a Number you want to know about</h1></label>
 <input type="search" name="search" id="catSearch"  placeholder="Search">
 &nbsp<button onclick ="Number(catSearch.value)" type="button" class="btn btn-info">Search</button>`


 document.querySelector(".container").innerHTML = ` <H1>Result</H1>`;

function Number(value) {

    fetch(`http://numbersapi.com/` + value + `?json`)
        .then((res) => res.json())
        .then((data) => initialize(data))
        .catch((err) => console.log("Error:", err.message));


    function initialize(Data) {
        // console.log(Data.text)
        document.querySelector(".container").innerHTML = `
                                                 <h1>${Data.number}</h1>
                                                 <h1>${Data.text}</h1>
                                                  `
    }

}
