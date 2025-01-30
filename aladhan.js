// console.log(json.data.timings)
//{Fajr: '06:02', Sunrise: '08:04', Dhuhr: '12:07', Asr: '13:52', Sunset: '16:11', …}

document.getElementById("btn").addEventListener("click" , () => {
    const date = document.getElementById("date").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    // const city = "London";
    // const country = "United Kingdom";
    const url = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}`;
    fetch(url)
    .then((response) => response.json() )
    .then((json) => {
        let times = json.data.timings;
         document.querySelector("#Fajr p").innerHTML = `${times.Fajr}`
         document.querySelector("#Sunrise p").innerHTML = `${times.Sunrise}`
         document.querySelector("#Dhuhr p").innerHTML =  `${times.Dhuhr}`
         document.querySelector("#Asr p").innerHTML =  `${times.Asr}`
         document.querySelector("#Maghrib p").innerHTML =  `${times.Maghrib}`
         document.querySelector("#Isha p").innerHTML =  `${times.Isha}`
    })
})



