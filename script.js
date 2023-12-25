setTimeout(function () {
    document.getElementById('intro').style.opacity = '1';
}, 1000);
setTimeout(function () {
    document.getElementById('dugme1').style.opacity = '1';
}, 3000);    

element.addEventListener('click', myFunction);

function toPesmica(){
    document.getElementById('intro').style.opacity = '0';
    document.getElementById('intro').style.zIndex = '0';
                
    document.getElementById('dugme1').style.opacity = '0';
    document.getElementById('dugme1').style.zIndex = '0';
    
    setTimeout(function () {    
        document.getElementById('pesmica').style.opacity = '1';
        document.getElementById('pesmica').style.zIndex = '1';   
    
        document.getElementById('dugme21').style.opacity = '1';
        document.getElementById('dugme21').style.zIndex = '1';  
    
        document.getElementById('dugme22').style.opacity = '1';
        document.getElementById('dugme22').style.zIndex = '1';  
    }, 300);   
};


function toIntro(){
    document.getElementById('pesmica').style.opacity = '0';
    document.getElementById('pesmica').style.zIndex = '0';   
    
    document.getElementById('dugme21').style.opacity = '0';
    document.getElementById('dugme21').style.zIndex = '0';  
    
    document.getElementById('dugme22').style.opacity = '0';
    document.getElementById('dugme22').style.zIndex = '0'; 
    
    setTimeout(function () {   
        document.getElementById('intro').style.opacity = '1';
        document.getElementById('intro').style.zIndex = '1';
                
        document.getElementById('dugme1').style.opacity = '1';
        document.getElementById('dugme1').style.zIndex = '1';        
    }, 300);   
};


function toPorukica(){
    document.getElementById('pesmica').style.opacity = '0';
    document.getElementById('pesmica').style.zIndex = '0';   
    
    document.getElementById('dugme21').style.opacity = '0';
    document.getElementById('dugme21').style.zIndex = '0'; 

    document.getElementById('dugme22').style.opacity = '0';
    document.getElementById('dugme22').style.zIndex = '0'; 
    
    setTimeout(function () {   
        document.getElementById('porukica').style.opacity = '1';
        document.getElementById('porukica').style.zIndex = '1';
                
        document.getElementById('dugme3').style.opacity = '1';
        document.getElementById('dugme3').style.zIndex = '1';        
    }, 300);   
};


function toPesmicaBack(){
    document.getElementById('porukica').style.opacity = '0';
    document.getElementById('porukica').style.zIndex = '0';
                
    document.getElementById('dugme3').style.opacity = '0';
    document.getElementById('dugme3').style.zIndex = '0';
    
    setTimeout(function () {    
        document.getElementById('pesmica').style.opacity = '1';
        document.getElementById('pesmica').style.zIndex = '1';   

        document.getElementById('dugme21').style.opacity = '1';
        document.getElementById('dugme21').style.zIndex = '1';  
        
        document.getElementById('dugme22').style.opacity = '1';
        document.getElementById('dugme22').style.zIndex = '1';  
    }, 300);   
};


function akoKlikneNe(){
    var dugme = document.getElementById("ne");

    var maxX = window.innerWidth - dugme.offsetWidth;
    var maxY = window.innerHeight - dugme.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    dugme.style.left = randomX + "px";
    dugme.style.top = randomY + "px";
}
