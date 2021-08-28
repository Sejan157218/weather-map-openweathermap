const featchURL =async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
    
}

const getWeather = ()=>{
    const searBox= document.getElementById('input-field');
    const searBoxValue = searBox.value;
    searBox.value = '';
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${searBoxValue}&units=metric&appid=1a06a9090632cab3debe2ffa50e8e0e6
    `;
    featchURL(url).then(data=>{
   
        const weather = document.getElementById('weather');
        weather.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = 
        `
        <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name} ${data.sys.country}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
            <h1 class="lead">${data.weather[0].description}</h1>
        </div>
        `;
        console.log(div);
        
        weather.appendChild(div);
    });
    
}

// const urls = 'https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=1a06a9090632cab3debe2ffa50e8e0e6'
// featchURL(urls);
// console.log(urls);