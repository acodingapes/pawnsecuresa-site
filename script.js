// Smooth scroll
// Smooth scrolling for all anchor links
document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const target = document.querySelector(targetId);
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});