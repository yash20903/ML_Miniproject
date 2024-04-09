document.getElementById("instagramForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get values from form
    const followerCount = document.getElementById("userFollowerCount").value;
    const followingCount = document.getElementById("userFollowingCount").value;
    const biographyLength = document.getElementById("userBiographyLength").value;
    const mediaCount = document.getElementById("userMediaCount").value;
    const hasProfilePic = document.getElementById("userHasProfilPic").value;
    const isPrivate = document.getElementById("userIsPrivate").value;
    const usernameDigitCount = document.getElementById("usernameDigitCount").value;
    const usernameLength = document.getElementById("usernameLength").value;
    
    // Prepare data to send to server
    const data = {
        userFollowerCount: followerCount,
        userFollowingCount: followingCount,
        userBiographyLength: biographyLength,
        userMediaCount: mediaCount,
        userHasProfilPic: hasProfilePic,
        userIsPrivate: isPrivate,
        usernameDigitCount: usernameDigitCount,
        usernameLength: usernameLength
    };
    
    // Send data to server
    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById("result").textContent = result.prediction;
    })
    .catch(error => console.error("Error:", error));
});
