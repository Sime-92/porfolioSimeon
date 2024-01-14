var map = L.map('map').setView([39.885723, -0.092202], 13); // Usa tu latitud y longitud

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    var marker = L.marker([39.885723, -0.092202]).addTo(map);