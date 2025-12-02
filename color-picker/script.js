document.getElementById('colorInput').addEventListener('input', function(event) {
    // Get Selected Color from Input
    let selectedColor = event.target.value;

    // Update Color Text
    document.getElementById('colorCode').textContent = selectedColor;

    // Update Color Display
    document.getElementById('colorDisplay').style.backgroundColor = selectedColor;
})
