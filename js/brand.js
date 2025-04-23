function matchSubtitleWidth() {
    const title = document.getElementById("brandTitle");
    const subtitle = document.getElementById("brandSubtitle");
    if (title && subtitle) {
        subtitle.style.width = `${title.offsetWidth}px`;
    }
}

// Run on page load
window.addEventListener('load', matchSubtitleWidth);

// Run on window resize
window.addEventListener('resize', matchSubtitleWidth);

// Run on font load to handle custom fonts
document.fonts.ready.then(matchSubtitleWidth); 