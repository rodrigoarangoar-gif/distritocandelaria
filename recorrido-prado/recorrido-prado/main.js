// Carousel simple (auto + manual)
(function(){
  const track = document.querySelector('.caro-track');
  if(!track) return;
  const imgs = Array.from(track.querySelectorAll('img'));
  let idx = 0;
  function show(i){
    imgs.forEach((im, k)=> im.classList.toggle('active', k===i));
  }
  show(0);
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  nextBtn && nextBtn.addEventListener('click', ()=>{ idx = (idx+1)%imgs.length; show(idx); resetTimer(); });
  prevBtn && prevBtn.addEventListener('click', ()=>{ idx = (idx-1+imgs.length)%imgs.length; show(idx); resetTimer(); });

  let timer = setInterval(()=>{ idx = (idx+1)%imgs.length; show(idx); }, 4500);
  function resetTimer(){ clearInterval(timer); timer = setInterval(()=>{ idx = (idx+1)%imgs.length; show(idx); }, 4500); }

  // Form demo handler
  const submit = document.getElementById('submit');
  submit && submit.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const out = document.getElementById('form-msg');
    if(!name || !email){ out.textContent = 'Por favor completa nombre y correo.'; return; }
    out.textContent = `Gracias ${name}. Tu inscripción se ha registrado (demo).`;
    document.getElementById('form-signup').reset();
  });

  // QR/PDF demo
  const btnqr = document.getElementById('btn-qr');
  btnqr && btnqr.addEventListener('click', ()=>{ alert('Simulación de descarga PDF/QR. Sustituye con tu enlace al PDF o generador de QR.'); });
})();