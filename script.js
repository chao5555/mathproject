function displayTrackImages() {
    const raceType = document.getElementById('raceType').value;
    const trackImage = document.getElementById('trackImage');
    const detailedTrackImage = document.getElementById('detailedTrackImage');
    let trackImagePath = '';
    let detailedTrackImagePath = '';

    switch (raceType) {
        case '100m':
            trackImagePath = '100mstd.jpg'; // Path to the 100 meters track image
            detailedTrackImagePath = '100mtable.jpg'; // Path to the detailed track image
            break;
        case '200m':
            trackImagePath = '200mstd.jpg'; // Path to the 200 meters track image
            detailedTrackImagePath = '200mtable.jpg'; // Path to the detailed track image
            break;
        case '4x100m':
            trackImagePath = '4x100mstd.jpg'; // Path to the 4x100 meters track image
            detailedTrackImagePath = '4x100mtable.jpg'; // Path to the detailed track image
            break;
        default:
            break;
    }

    if (trackImagePath && detailedTrackImagePath) {
        trackImage.src = trackImagePath;
        detailedTrackImage.src = detailedTrackImagePath;
        document.getElementById('trackImagesContainer').style.display = 'block';
    } else {
        document.getElementById('trackImagesContainer').style.display = 'none';
    }
}