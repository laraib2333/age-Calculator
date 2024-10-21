function calculateAge() {
    let currentYear = prompt('Please enter the current year:');
    let birthYear = prompt('Please enter your birth year:');

    let age1 = currentYear - birthYear;
    let age2 = age1 + 1;

    document.getElementById('message').innerHTML = `
        <p>Current Year: ${currentYear}</p>
        <p>Birth Year: ${birthYear}</p>
        <p>Your Age: ${age1}</p>
        <p><u>They are either <b>${age1}</b> or <b>${age2}</b> years old</u></p>
    `;
}
