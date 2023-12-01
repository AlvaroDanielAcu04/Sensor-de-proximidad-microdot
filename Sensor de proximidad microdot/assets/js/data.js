// Pido los datos cada segundo
setInterval(() => {
    // Pido los datos a la ruta /data/update
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Guardo el valor de temperatura
        const dist = data.centimetros;
        // Maximo valor de temperatura
        const max_dist = 100;
        // Lo escalo a un valor entre -30 y 240 grados
        const deg = dist * 270 / max_dist - 30;
        // Lo cambio en la aguja
        console.log(dist)
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
    
}, 200);