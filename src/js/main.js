const entry = document.getElementById('play').addEventListener('click', () =>{
  const entryAplication = document.getElementById('entry-aplication');
  entryAplication.classList.add('hide');
  const options = document.getElementById('options');
  options.classList.add('show');
});
const optionMin30min = document.getElementById('menos-30-min').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
    const root = document.getElementById('root');
    root.classList.add('show')
     
  });
const option30a60min = document.getElementById('30-60min').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});
const option1a2horas = document.getElementById('1-2horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});
const optionMax2horas = document.getElementById('más-2-horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});

