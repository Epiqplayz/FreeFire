// Modal logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');

function openModal(name) {
    modalTitle.innerText = `${name}'s Hidden Story`;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
// Open and Close Modal Logic
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
