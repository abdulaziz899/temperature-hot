
const city=document.getElementById('city');
const temperature=document.getElementById('temperature');
const clouds=document.getElementById('clouds');
const submit=document.getElementById('submit');
submit.addEventListener('click',function(){
    const input=document.getElementById('inputArea').value;
    let iconURL=`https://openweathermap.org/img/wn/`;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=6aa5666ae5bc45e960654671325d8183')
            .then((response) => response.json())
            .then(data => {
                let temperatureValue=data['main']['temp'];
                let pressureValue=data['main']['pressure'];
                let feels_likeValue=data['main']['feels_like'];
                let humidityValue= data['main']['humidity'];
                let countryValue = data['sys']['country'];
                let sunriseValue = data['sys']['sunrise'];
                let sunsetValue = data['sys']['sunset'];
                let descriptionValue =data['weather'][0]['description'];
                let iconChing=data['weather'][0]['icon']; 
                city.innerText=`${input } ${countryValue}`;
                let icon=document.getElementById('logo');
                icon.src=`${ iconURL}${iconChing}@2x.png`;
                console.log(icon);
                temperature.innerText=` temperature  :   ${temperatureValue}  
                                        pressure     :   ${pressureValue}
                                        feels_like   :   ${feels_likeValue}
                                        humidity     :   ${humidityValue}                           
                                        sunrise      :   ${sunriseValue}                           
                                        sunset       :   ${sunsetValue}
                                        description  :   ${descriptionValue}`
            })
            document.getElementById('inputArea').value='';
     
})
