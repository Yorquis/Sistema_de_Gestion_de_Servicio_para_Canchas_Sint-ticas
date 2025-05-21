document.addEventListener('DOMContentLoaded', function() {
    // Gestión de selección de horarios
    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (!this.classList.contains('booked')) {
                // Lógica de selección
            }
        });
    });
    
    // Integración con API de Google Maps
    function initMap() {
        // Configuración del mapa
    }
});