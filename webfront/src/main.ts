function showError(message: string) {
  const notif = document.getElementById('notif');

  const snackbar = document.createElement('div');
  snackbar.className = 'snackbar error active';
  snackbar.textContent = message;

  notif?.appendChild(snackbar);

  setTimeout(() => snackbar.remove(), 800);
}
