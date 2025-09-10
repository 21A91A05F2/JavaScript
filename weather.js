function weatherInfo(event){
    event.preventDefault();
    // alert("Connnected");
    let inputValue = document.getElementById('info').value;
    // alert(inputValue);  checking the value
    let apiKey ="22d2fb5a969b64bc1107e5c1bd80ed91";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`)
    .then((result)=>{
        console.log(result);
        display.innerHTML = `<h3> City : ${result.data.name}</h3>
        <h3> Result: ${result.data.main.temp} <sub>0</sub>C</h3>
        <p> <b>Wheather</b>: ${result.data.weather[0].description}</p> 
        <h4> Windspeed : ${result.data.wind.speed} m/s</h4>`;
    })
    .catch(()=>{
        console.log("Enter the valid city name");
    })

}