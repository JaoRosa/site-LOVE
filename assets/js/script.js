// Preview da imagem
const fotoInput = document.getElementById('foto');
const preview = document.getElementById('preview');

fotoInput.addEventListener('change', function() {
  const file = this.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      preview.innerHTML = `<img src="${this.result}" alt="Preview da imagem">`;
    });
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = '';
  }
});

// Dark Mode
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
