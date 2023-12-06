function toggleGender() {
    var genderLabel = document.querySelector('.form-check-label');
    
    // Toggle text and apply style
    if (genderLabel.textContent === 'Male') {
        genderLabel.textContent = 'Female';
        genderLabel.classList.add('female-text');
    } else {
        genderLabel.textContent = 'Male';
        genderLabel.classList.remove('female-text');
    }
}