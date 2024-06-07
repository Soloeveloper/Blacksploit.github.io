document.getElementById('download-btn').addEventListener('click', function() {
    window.location.href = 'Downloads/BlackSploit.zip';
});

document.getElementById('contact-btn').addEventListener('click', function() {
    navigator.clipboard.writeText('Email:Exprvssed@gmail.com');
    alert('Contact email copied to clipboard!');
});
