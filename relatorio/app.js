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
  novo.className = "descanso";
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
const edit = document.getElementById("editar");
edit.addEventListener("click",(e)=>{
e.preventDefault()
 obs.style.display = "block"; 
  
})
function mudarParaDiv() {
    let obs =document.querySelector("#obs");
let saida = document.getElementById("saidaObs");
saida.style.display="block";
saida.innerText = obs.value;

obs.style.display = "none"
}
 document.getElementById('screenshotBtn').addEventListener('click', () => {
mudarParaDiv();
      const element = document.getElementById('capture');
      html2canvas(element, {
        useCORS: true, // Garante que imagens de fundo externas sejam carregadas
        allowTaint: false, // Impede a alteração do canvas por políticas de segurança
        scale: 2 // Aumenta a qualidade da captura
      }).then(canvas => {
        // Adiciona o canvas à página (apenas para visualizar)
        document.body.appendChild(canvas);

        // Baixa a imagem
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
