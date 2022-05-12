let phraseInput = document.querySelector('#phrase');
let iterations = document.querySelector('#number');
let initIterations = document.querySelector('#init');
let btn = document.querySelector('#enviar');

phraseInput.addEventListener('change', function(e){
    phraseInput.value = phraseInput.value.replaceAll('`', '');
    phraseInput.value = '`'+phraseInput.value+'`';
})

btn.addEventListener('click', function(){
    let phrase = phraseInput.value;
    phrase = phrase.replaceAll('x', '${b}');            

    let inicio = initIterations.value;
    let iteraciones = iterations.value;

    console.log(phrase);
    console.log(inicio);
    console.log(iteraciones);

    let code = "";    
    for(var b = parseInt(inicio); b < (parseInt(iterations.value)+1); b++){
        console.log(`Entramos al bucle ${b} el elemento a dibujar es ${phrase}`);        
        code += eval(phrase)+'\n';
    }

    document.querySelector("#resultado").value = code;
})

// Copiar y pegar
document.querySelector("#copy").addEventListener('click',function(){
    var content = document.querySelector("#resultado");    
    content.select();
    document.execCommand('copy');  
})