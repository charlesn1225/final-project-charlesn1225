document.addEventListener('DOMContentLoaded', function () {
    const volunteerButton = document.querySelector('button[onclick*="volunteer-form"]');
    const volunteerForm = document.getElementById('volunteer-form');

    volunteerButton.addEventListener('click', function() {
        volunteerForm.style.display = volunteerForm.style.display === 'block' ? 'none' : 'block';
    });

    const moreInfoButton = document.getElementById('more-info-button');
    const moreInfoContent = document.getElementById('more-info');

    moreInfoButton.addEventListener('click', () => {
        moreInfoContent.style.display = moreInfoContent.style.display === 'block' ? 'none' : 'block';
    });

    const charityName = document.querySelector('h2');
    let hoverInfoDiv = null; // Initialize a variable to hold the dynamically created div
    
    charityName.addEventListener('mouseover', () => {
        hoverInfoDiv = document.createElement('div');
        hoverInfoDiv.textContent = 'More detailed info about the charity...';
        document.body.appendChild(hoverInfoDiv);
    });

    charityName.addEventListener('mouseout', () => {
        if (hoverInfoDiv) {
            document.body.removeChild(hoverInfoDiv);
            hoverInfoDiv = null; // Reset the variable to ensure it's clean for the next hover event
        }
    });
});
