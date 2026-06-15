/* Main JavaScript for Custom Animations and Logic */

document.addEventListener('DOMContentLoaded', function () {
    // Animate progress bars on load
    setTimeout(function () {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            if (bar.hasAttribute('data-confidence')) {
                const target = bar.getAttribute('data-confidence');
                bar.style.width = target;
            }
        });
    }, 500);

    // Any other global custom JS can go here
});
