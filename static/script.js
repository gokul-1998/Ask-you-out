document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("moveButton");

    button.addEventListener("mousemove", function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const distance = Math.sqrt(x * x + y * y);
        const minDistance = 30; // Adjust this value to set the minimum distance in pixels

        if (distance < minDistance) {
            const moveAmount = 100; // Adjust this value to control the speed of movement

            // Calculate the angle and move the button away in the direction of the cursor
            const angle = Math.atan2(y, x);
            const newX = Math.cos(angle) * moveAmount;
            const newY = Math.sin(angle) * moveAmount;

            button.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    });
});
