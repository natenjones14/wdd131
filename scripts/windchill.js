document.addEventListener("DOMContentLoaded", function() {
    const temperature = 10; // in Celsius
    const windSpeed = 5; // in km/h

    function calculateWindChill(temperature, windSpeed) {
        if ((temperature <= 10 && temperature >= -50) && (windSpeed > 4.8)) {
            // Wind Chill calculation formula (for metric units)
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else if ((temperature <= 50 && temperature >= -58) && (windSpeed > 3)) {
            // Wind Chill calculation formula (for imperial units)
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return "N/A";
        }
    }

    const windchillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchillFactor").textContent = (windchillFactor !== "N/A") ? windchillFactor + " °C" : "N/A";
});