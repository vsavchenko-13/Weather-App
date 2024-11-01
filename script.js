const city = document.querySelector("#city");
const form = document.querySelector("form");
form.addEventListener("submit", getWeather);

async function getWeather(event){
    event.preventDefault();
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city.value + "?key=FV4AGXK25ZGCPGKDF3MVNY5D6&contentType=json"

    const request = new Request(url,{
        mode: "cors"
    });

    const response = await fetch(request);
    if(response.ok){
        const data = await response.json();
        console.log(data.currentConditions.temp)
    } else {
        console.log(response);
    }
    
}