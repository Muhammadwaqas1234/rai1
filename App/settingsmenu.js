document.getElementById('settings-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings-popup').style.display = 'flex';
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('settings-popup')) {
        document.getElementById('settings-popup').style.display = 'none';
    }
});

document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.settings-section').forEach(section => section.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.id.replace('-tab', '-section')).classList.add('active');
    });
});

document.getElementById('general-tab').click(); // Open the General tab by default
