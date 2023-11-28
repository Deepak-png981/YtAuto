document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.querySelector('input[type=file]');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to upload');
        return;
    }

    const formData = new FormData();
    formData.append('video', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Video uploaded successfully!');
            } else {
                alert('Upload failed: ' + data.message);
            }
        }).catch(error => {
            console.error('Error:', error);
        });
});
