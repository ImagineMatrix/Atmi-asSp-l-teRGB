



let bildes1 = ["a1.png","a2.png","a3.png","a4.png","a5.png","a6.png", "a7.png", "a8.png"];
let bildes2 = ["(255, 0, 0)","(0, 255, 0)","(0, 0, 255)","(255, 255, 0)","(255, 255, 255)","(0, 0, 0)", "(255, 0, 255)", "(0, 255, 255)"];
 


let firstBtn = null;
let secondBtn = null;
let lock = false;

function shuffle(array) {
     array.sort(() => Math.random() - 0.5);
  }
  
  function randomPairs(k){
      console.log(k+"***");
                   let n = document.getElementById("ieksaa").value;
                   let randomi=new Set();
                   let randomBildes=[];
                    n=bildes1.length;
                   while(randomi.size<k){
                       randomi.add(Math.floor(Math.random()*n));
                   }
                   randomi.forEach((item)=>{
                       randomBildes.push(bildes1[item]);
                       randomBildes.push(bildes2[item]);
                   });
                   return randomBildes;
               }
   function izveido(n){
              const maxPoints = (n == 2) ? 20 : 90;
              let sekundes = maxPoints;
               let pairsFound = 0;            
    let totalPairs = (n * n) / 2; 
              document.getElementById("laiks").innerHTML = sekundes + " s ";
              
             let timer = setInterval(function(){
               
               if (sekundes>0) { sekundes--;  
               document.getElementById("laiks").innerHTML= sekundes+" s ";
             } else{
              clearInterval(timer);
        lock = true; 

        
        const panel = document.getElementById("kollona");
        const loseMsg = document.createElement("DIV");
        loseMsg.textContent = "Tu zaudēji!";
        loseMsg.style.fontSize = "24px";
        loseMsg.style.fontWeight = "bold";
        loseMsg.style.color = "red";
        loseMsg.style.marginTop = "20px";
        panel.appendChild(loseMsg);

       
        const retryBtn = document.createElement("BUTTON");
        retryBtn.textContent = "Mēģināt vēlreiz :(";
        retryBtn.style.fontSize = "18px";
        retryBtn.style.padding = "10px 20px";
        retryBtn.style.marginLeft = "20px";
        retryBtn.style.verticalAlign = "middle";
        retryBtn.style.cursor = "pointer";
         retryBtn.style.background = "red";
        retryBtn.onclick = () => {
            location.reload(); 
        };
        panel.appendChild(retryBtn);
    }

       
       
       
   },1000);
             
             let laiksElem = document.getElementById("laiks");
             laiksElem.style.position = "absolute";
            laiksElem.style.top = "140px";         
            laiksElem.style.left = "50%";         
            laiksElem.style.transform = "translateX(-50%)";
            laiksElem.style.fontSize = "24px";     
            laiksElem.style.fontWeight = "bold";
             let izmaina;
             if (n == 2) {
              izmaina = (sekundes - 5) * 1000; 
            } else if (n == 4) {
              izmaina = (sekundes - 10) * 1000; 
              }

            
              setTimeout(function(){
                 document.getElementById("laiks").style.backgroundColor="red";
              },izmaina);
                 document.getElementById("kollona").style.display = "block";
                 document.getElementById("ieksaa").style.display = "none";
                document.getElementById("podz").style.display = "none";

                 console.log(n+"++");
    


               

               let bildes;
               if(n == 2){
               bildes = randomPairs(2);
               }
               else if (n == 4) {
               bildes = randomPairs(8);
               }
               console.log(bildes.length);

               shuffle(bildes);

               for (let i in bildes) {
                  console.log(bildes[i]);
                  }
            
            
            let kollona;
         if(document.getElementById("pogaslaukums") !== null){
             document.getElementById("pogaslaukums").innerHTML = "";
          kollona = document.getElementById("pogaslaukums");
        }
        else{
            let kollona = document.createElement("DIV");
          
        }
          document.getElementById("alerts").innerHTML = "";
          n = parseInt(document.getElementById('ieksaa').value);
          if(n <= 0){
              document.getElementById("alerts").innerHTML = "Ievadi pozitīvu skaitli";
              return 0;
            }

            
           for(let i = 0; i < n ; i++){
                let rinda = document.createElement("DIV");
                kollona.appendChild(rinda);
                let urrl = 'https://ebetina.pythonanywhere.com/static/';

                for(let j = 0; j < n; j++){
                let kollona = document.getElementById("kollona");   
                 let poga = document.createElement("INPUT");
                 poga.style.backgroundImage = "url('https://ebetina.pythonanywhere.com/static/fonins.png')";
                 poga.setAttribute("id", (i*n + j) + "");
                 poga.type = "button";
               poga.onclick = () => {
                if (lock || poga === firstBtn) return;

                let z = i * n + j;

                if (bildes[z].startsWith("a")) {
                 poga.style.backgroundImage = "url(" + urrl + bildes[z] + ")";
                 poga.value = "";
                } else {
                 poga.style.backgroundImage = "none";
                 poga.value = bildes[z];
                }
    

                     if (!firstBtn) {
                     firstBtn = poga;
                    firstBtn.idx = z;
                    } else {
                    secondBtn = poga;
                    secondBtn.idx = z;
                     lock = true;

      
        let ok =
            bildes1.includes(bildes[firstBtn.idx]) &&
            bildes2.includes(bildes[secondBtn.idx]) &&
            bildes1.indexOf(bildes[firstBtn.idx]) ===
            bildes2.indexOf(bildes[secondBtn.idx]) ||

            bildes1.includes(bildes[secondBtn.idx]) &&
            bildes2.includes(bildes[firstBtn.idx]) &&
            bildes1.indexOf(bildes[secondBtn.idx]) ===
            bildes2.indexOf(bildes[firstBtn.idx]);

            if (!ok) {
            setTimeout(() => {
                closeButton(firstBtn);
                closeButton(secondBtn);
                firstBtn = null;
                secondBtn = null;
                lock = false;
            }, 700);
            } else {
            firstBtn = null;
secondBtn = null;
lock = false;

pairsFound++;  
if(pairsFound === totalPairs){  
    clearInterval(timer);       
    let points = maxPoints - (maxPoints - sekundes); 
    setTimeout(() => {
        const panel = document.getElementById("kollona");
        const laukumins = document.createElement("DIV");
        laukumins.textContent = "Apsveicu! Tu uzvarēji! Tu ieguvi " + points + " punktus";
        laukumins.style.fontSize = "20px";
        laukumins.style.fontWeight = "bold";
        laukumins.style.color = "green";
        laukumins.style.marginTop = "20px";
        panel.appendChild(laukumins);
    
    

 

const restartBtn = document.createElement("BUTTON");
restartBtn.textContent = "Spēlēt vēlreiz :)";
restartBtn.style.fontSize = "18px";
restartBtn.style.padding = "10px 20px";
restartBtn.style.marginLeft = "20px";  
restartBtn.style.marginLeft = "24px";  
restartBtn.style.verticalAlign = "middle"; 
restartBtn.style.cursor = "pointer";
restartBtn.style.background = "green";
   
    restartBtn.onclick = () => {
        location.reload(); 
    };

  panel.appendChild(restartBtn);
    
     }, 700); 
}
        }
        }
        };
                if(n == 2){
                poga.style.width = "140px";
                poga.style.height =  "130px";
                poga.textContent = "Teksts";
                poga.style.fontSize = "18px"; 
               }
               else if(n == 4){
                poga.style.width = "95px";
                poga.style.height =  "95px";
                 poga.textContent = "Teksts";
                poga.style.fontSize = "14px"; 
                
               }
               
                poga.style.margin = "15px";
                poga.style.border = "none";
                kollona.style.paddingTop = "50px";
                kollona.style.paddingBottom = "50px";
                kollona.style.paddingLeft = "50px";
                kollona.style.paddingRight = "50px";
                kollona.style.marginTop = "60px";   
                kollona.style.marginRight = "360px";  
               
                kollona.style.alingItems = "center";
                     
     
                
                

                rinda.appendChild(poga);
                
                }   
            }

          } 

  


function closeButton(btn) {
    btn.style.backgroundImage =
        "url('https://ebetina.pythonanywhere.com/static/fonins.png')";
    btn.value = "";
}


   




