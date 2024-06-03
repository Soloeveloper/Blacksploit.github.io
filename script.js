document.getElementById("download-btn").addEventListener("click", function() {
    window.location.href = "Downloads/BlackSploit.zip"; // Change the path to your zip file
});

document.getElementById("contact-btn").addEventListener("click", function() {
    const email = "Exprvssed@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
        alert("Email copied to clipboard: " + email);
    }, function() {
        alert("Failed to copy email to clipboard. Please copy it manually: " + email);
    });
});
