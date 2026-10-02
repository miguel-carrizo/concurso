document.getElementById('btn-clara').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el '#' altere la URL o el scroll
    votarPor('CLARA');            // Llama a tu función
});

document.getElementById('btn-rocio').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el '#' altere la URL o el scroll
    votarPor('ROCIO');            // Llama a tu función
});

document.getElementById('btn-rosimar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el '#' altere la URL o el scroll
    votarPor('ROSIMAR');            // Llama a tu función
});

document.getElementById('btn-tres').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el '#' altere la URL o el scroll
    votarPor('TRES');            // Llama a tu función
});

const votarPor = (quien) => {
    if(quien==='TRES') {
        window.alert('GRACIAS POR VOTAR PARA QUE VIAJEN LAS 3');
    } else {
        window.alert('GRACIAS POR VOTAR PARA QUE VIAJE ' + quien);    
    }
}