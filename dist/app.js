let db;

// Initialize Firebase
firebase.initializeApp({
    // Firebase config will be automatically loaded from /__/firebase/init.js
});

db = firebase.firestore();

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }

    // Add active class to clicked nav link
    event.target.closest('.nav-link')?.classList.add('active');
}

// Make showSection available globally for onclick handlers
window.showSection = showSection;
