window.addEventListener('load', () => {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('tempValor');
    let temperaturaDescripcion = document.getElementById('tempDescripcion');

    let ubicacion = document.getElementById('location');
    let iconoClima = document.getElementById('locationEmoji');

    let vientoVelocidad = document.getElementById('velocViento');

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.weatherapi.com/v1/current.json?key=9f02544d644a4ed2874180734221910&q=${lat},${lon}&lang=es&aqi=9f02544d644a4ed2874180734221910`

            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    ubicacion.innerHTML = `Estas en la ciudad de ${data.location.name}`
                    temperaturaValor.innerHTML = `La temperatura actual es de ${data.current.temp_c}°C`;
                    temperaturaDescripcion.innerHTML = `El dia esta ${data.current.condition.text}`
                    iconoClima.src = `${data.current.condition.icon}`
                    vientoVelocidad.innerHTML = `El viento corre a ${data.current.wind_kph} km/h`
                })
                .catch((error) => {
                    console.log(error)
                })
        })
    }
})


