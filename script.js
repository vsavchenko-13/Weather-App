const city = document.querySelector("#city");
const form = document.querySelector("form");
form.addEventListener("submit", getWeather);

async function getWeather(){
    event.preventDefault();
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?key=FV4AGXK25ZGCPGKDF3MVNY5D6 "
    const response = await fetch(url,{
        mode: "cors"
    });
    if(response.ok){
        console.log(response);
    } else {
        console.log(response);
    }
}