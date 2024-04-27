fetch('last_update.php')
    .then(response => response.text())
    .then(lastUpdateDate => {
        // Display the last update date and time on the webpage
        document.getElementById('lastUpdate').innerText = 'Last updated on: ' + lastUpdateDate;
    })
    .catch(error => console.error('Error fetching last update:', error));