document.getElementById("download-btn").addEventListener("click", function() {
    window.location.href = "Downloads/BlackSploit.zip";
});

document.getElementById("contact-btn").addEventListener("click", function() {
    const email = "Exprvssed@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
        alert("Copied Email  " + email);
    }, function() {
        alert("Failed Try Again  " + email);
    });
});
