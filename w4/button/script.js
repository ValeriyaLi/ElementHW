document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
button.addEventListener('click', (e) => {
          const cnt = Number(e.currentTarget.innerText) + 1;
      e.currentTarget.innerText = cnt;  }); });