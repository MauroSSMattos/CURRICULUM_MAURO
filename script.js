document.querySelectorAll('.seta').forEach(seta => {
  seta.addEventListener('click', () => {
    seta.classList.toggle('open');
    
    // Seleciona o próximo elemento irmão (conteúdo a ser exibido/escondido)
    let content = seta.nextElementSibling;
    
    // Alterna entre max-height 0 (fechado) e 500px (aberto)
    if (seta.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Ajusta a altura com base no conteúdo
    } else {
      content.style.maxHeight = 0; // Fecha o conteúdo
    }

    // Animação da seta rotacionando
    seta.querySelector('.toggle-icon').style.transform = 
      seta.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
  });
});