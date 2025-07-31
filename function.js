
document.addEventListener('DOMContentLoaded', function() {

  // Add background music (autoplay, loop, no controls)
  if (!document.getElementById('bg-music')) {
    const audio = document.createElement('audio');
    audio.id = 'bg-music';
    audio.src = 'bgmusic.mp3';
    audio.autoplay = true;
    audio.loop = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);
  }

  const btn = document.getElementById('click');
  const popup = document.getElementById('flowers-popup');
  const backBtn = document.getElementById('back-btn');
  if (btn && popup) {
    btn.addEventListener('click', () => {
      popup.style.display = 'flex';
      popup.classList.add('show-flash');
      setTimeout(() => {
        popup.classList.remove('show-flash');
      }, 2000);
    });
  }
  if (backBtn && popup) {
    backBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }


  const back = document.getElementById('back');
  if (back) {
    back.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }


  const display = document.getElementById('safebox-display');
  const buttons = document.querySelectorAll('.safebox-keypad button');
  if (display && buttons.length) {
    let input = '';
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.id === 'erase-btn') return;
        input += btn.textContent;
        display.textContent = input;
      });
    });
    const eraseBtn = document.getElementById('erase-btn');
    if (eraseBtn) {
      eraseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        input = input.slice(0, -1);
        display.textContent = input || '\u00A0';
      });
    }
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        if (input === '0117') {
          Swal.fire({
            title: 'Yay! 🎉',
            text: 'Correct code! Happy National Girlfriend Day Love! Proceed to the next step.',
            icon: 'success',
            confirmButtonColor: '#ffb6c1',
            background: '#fff0f6',
            color: '#d72660',
            customClass: {
              title: 'swal2-title',
              popup: 'swal2-popup',
            }
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'envelope.html';
            }
          });
        } else {
          Swal.fire({
            title: 'Oops!',
            text: 'Incorrect code. Try again!',
            icon: 'error',
            confirmButtonColor: '#ffb6c1',
            background: '#fff0f6',
            color: '#d72660',
            customClass: {
              title: 'swal2-title',
              popup: 'swal2-popup',
            }
          });
        }
      });
    }
  }
});

