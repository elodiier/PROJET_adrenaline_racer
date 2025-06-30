/* Modale de connexion*/
const modal = document.getElementById('loginModal');
const btn = document.getElementById('loginBtn');
const close = document.getElementById('closeModal');
btn.onclick = () => { modal.style.display = "flex"; }
close.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
function openTab(tab) {
 document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
 document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
 document.querySelector(`.tab[onclick="openTab('${tab}')"]`).classList.add('active');
 document.getElementById(tab).classList.add('active');
}
// Simuler connexion / déconnexion pour changer l'icône
let connected = false;
btn.addEventListener('dblclick', () => {
 connected = !connected;
 document.getElementById('loginIcon').className = connected ? 'fas fa-sign-out-alt' : 'fas fa-user';
});