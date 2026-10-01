document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var d = new FormData(this);
  var texto = 'Olá! Quero ser parceiro da AgroSena.\nNome: ' + d.get('nome') +
    '\nEmpresa: ' + d.get('empresa') + '\nTipo: ' + d.get('tipo') + '\n' + d.get('msg');
  window.open('https://wa.me/5531971354032?text=' + encodeURIComponent(texto), '_blank');
});
