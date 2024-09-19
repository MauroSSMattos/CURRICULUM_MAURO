document.querySelectorAll('.seta').forEach(seta => {
  seta.addEventListener('click', () => {
    seta.classList.toggle('open');
    
    let content = seta.nextElementSibling;
    
    if (seta.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }

    seta.querySelector('.toggle-icon').style.transform = 
      seta.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
  });
});