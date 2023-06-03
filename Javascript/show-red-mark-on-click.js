// Show Red Mark On Click or touch By User Start

// Add event listener for click or touch event
document.addEventListener('click', handleButtonClick);
document.addEventListener('touchstart', handleButtonClick);

// Event handler function
function handleButtonClick(event) {
    // Prevent default behavior
    event.preventDefault();

    // Get the coordinates of the click or touch event
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    // Show the red mark
    showRedMark(x, y);
}

// Function to show red mark
function showRedMark(x, y) {
    // Create a new element
    const redMark = document.createElement('div');

    // Apply styles to the element
    redMark.style.position = 'fixed';
    redMark.style.top = `${y}px`;
    redMark.style.left = `${x}px`;
    redMark.style.width = '10px';
    redMark.style.height = '10px';
    redMark.style.backgroundColor = 'red';
    redMark.style.borderRadius = '50%';

    // Append the element to the document body
    document.body.appendChild(redMark);
}

// Show Red Mark On Click or touch By User End