let phraseInput = document.getElementById('phrase');
let iterations = document.getElementById('number');
let btn = document.getElementById('enviar');

phraseInput.addEventListener('change', function(e){
    phraseInput.value = phraseInput.value.replaceAll('`', '');
    phraseInput.value = '`'+phraseInput.value+'`';
})

btn.addEventListener('click', function(){
    let phrase = phraseInput.value;
    phrase = phrase.replaceAll('x', '${i}');
    console.log(phrase);

    let code = "";
    console.log(phrase);

    for(var b = 0; b < iterations.value; b++){
        let i = b +1;        
        code += eval(phrase)+'\n';
    }

    document.querySelector("textarea").value = code;
})

// Copiar y pegar
document.querySelector("#copy").addEventListener('click',function(){
    var content = document.querySelector("textarea");    
    content.select();
    document.execCommand('copy');  
})