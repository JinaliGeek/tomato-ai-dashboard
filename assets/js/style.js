/* ======= Index ======= 

 1. JS Start

 ======= Index ======= */

/* ======= 1. Short Text JS Start ======= */

function shorttext() {
    document.querySelectorAll('.type-text').forEach(element => {
        // Store original content if not already stored
        if (!element.dataset.originalText) {
            element.dataset.originalText = element.textContent;
        }

        if (window.innerWidth <= 1399) {
            // Show only initials
            const words = element.dataset.originalText.split(' ');
            const initials = words.map(word => word[0]).join(' ');
            element.textContent = initials;
        } else {
            // Restore original content
            element.textContent = element.dataset.originalText;
        }
    });
}

// Run on load and resize
window.addEventListener('load', shorttext);
window.addEventListener('resize', shorttext);

/* ======= 1. Short Text JS End ======= */

/* ======= 2. Copy Code JS Start ======= */

function copyLicenseKey() {
    // Select the license key text
    const licenseKey = document.querySelector('.license-key').textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(licenseKey)
        .then(() => {
            // Show the tooltip
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'inline-block';
            tooltip.style.opacity = 1;

            // Hide the tooltip after 2 seconds
            setTimeout(() => {
                tooltip.style.opacity = 0;
                tooltip.style.display = 'none';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

/* ======= 2. JS End ======= */

$(document).ready(function () {
    // Get the first day of the current month
    const startOfMonth = moment().startOf('month');
    // Get the current date
    const currentDate = moment();

    // Initialize the date range picker with default start and end dates
    $("#date-range").daterangepicker({
        startDate: startOfMonth,
        endDate: currentDate,
        locale: {
            format: 'MMMM D, YYYY', // Set the desired display format
        }
    });

    // Handle the 'apply' event when the user selects a date range
    $("#date-range").on('apply.daterangepicker', function (e, picker) {
        e.preventDefault();
        // Change the date format to 'MMMM D, YYYY' for both start and end dates
        const formattedStartDate = picker.startDate.format('MMMM D, YYYY');
        const formattedEndDate = picker.endDate.format('MMMM D, YYYY');

        // Output the selected range in the desired format
        console.log(`Selected Range: ${formattedStartDate} - ${formattedEndDate}`);
        // You can also update the input field with the selected range
        $("#date-range").val(`${formattedStartDate} - ${formattedEndDate}`);
    });
});