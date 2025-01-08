
let form = document.getElementById('form');
let alimentacao =  document.querySelector('.alimentacao');
let fralda =  document.querySelector('.fralda');
let banho =  document.querySelector('.banho');
let descanso =  document.querySelector('.descanso');
const btnAdd = document.querySelector('.btnAdd');
const btnfralda = document.querySelector('.btnfralda');
const btnbanho = document.querySelector('.btnbanho');
const btndescanso = document.querySelector('.btndescanso');


btnAdd.addEventListener('click', (e)=>{
  e.preventDefault()
  const novoEl = document.createElement('input')
  const br = document.createElement('br')
  novoEl.type = 'time'


 
  alimentacao.appendChild(novoEl)
  alimentacao.appendChild(br)
})

btnfralda.addEventListener('click', (e)=>{
  e.preventDefault()
  const novoEl = document.createElement('input')
  const br = document.createElement('br')
  novoEl.type = 'time'


 
  fralda.appendChild(novoEl)
  fralda.appendChild(br)
})


btnbanho.addEventListener('click', (e)=>{
  e.preventDefault()
  const novoEl = document.createElement('input')
  const br = document.createElement('br')
  novoEl.type = 'time'


 
  banho.appendChild(novoEl)
  banho.appendChild(br)
})

btndescanso.addEventListener('click', (e)=>{
  e.preventDefault()
  const novoEl = document.createElement('input')
  const novo = document.createElement('input')
  const p = document.createElement('p')
  const conteudo = document.createTextNode('à')
  const br = document.createElement('br')
  novoEl.type = 'time'
  novo.type = 'time'
p.appendChild(conteudo)

 
  descanso.appendChild(novoEl) 
  descanso.appendChild(conteudo)
  descanso.appendChild(novo)
  descanso.appendChild(br)

 


})


const captureScreenshot = () => {
  const element = document.getElementById('element-to-capture');

  html2canvas(element).then(canvas => {
    // Converte o canvas em uma imagem e a exibe na tela ou faz o download
    const img = canvas.toDataURL('image/png');
    
    // Exibe a imagem na tela
    const image = new Image();
    image.src = img;
    document.body.appendChild(image);

    // Para fazer o download da imagem
    const link = document.createElement('a');
    link.href = img;
    link.download = 'screenshot.png';
    link.click();
  });
};

// Evento do botão para capturar o print
document.getElementById('screenshot-button').addEventListener('click', captureScreenshot);