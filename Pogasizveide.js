/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
       
function izveido(){
                   
                   function shuffle(array) {
                   array.sort(() => Math.random() - 0.5);
               }

               function randomPairs(k){
                   let n = Document.getElementById("forma").value;
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


               let bildes1 = ["a1.png","a2.png","a3.png","a4.png","a5.png","a6.png", "a7.png", "a8.png"];
               let bildes2 = ["(255, 0, 0)","(0, 255, 0)","(0, 0, 255)","(255, 255, 0)","(255, 255, 255)","(0, 0, 0)", "(255, 0, 255)", "(0, 255, 255)"];

               let bildes;
               if(n === 2){
               bildes = randomPairs(2);
               }
               else if (n === 4) {
               bildes = randomPairs(8);
               }


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
            //set atribute
        }
          document.getElementById("alerts").innerHTML = "";
          n = parseInt(document.getElementById('forma').value);
          if(n <= 0){
              document.getElementById("alerts").innerHTML = "Ievadi pozitīvu skaitli";
              return 0;
            }

            
           for(let i = 0; i < n ; i++){
                let rinda = document.createElement("DIV");
                kollona.appendChild(rinda);
                let urrl = "https://ebetina.pythonanywhere.com/static/";

                for(let j = 0; j < n; j++){
                let kollona = document.getElementById("kollona");   
                let poga = document.createElement("INPUT");
                poga.type = "button";
                
                if (bildes[i*n + j].startsWith("a")){
                poga.style.backgroundImage = "url("+urrl + bildes[i*n + j]+")";
                console.log("hey");
                 }
                else {
                poga.value = bildes[i*n + j];
                }
                

                poga.style.width = "40%";
                poga.style.height = n/2 + "25px";
                poga.style.margin = "15px";
                poga.style.border = "none";
                kollona.style.paddingTop = "50px";
                kollona.style.paddingBottom = "50px";
                kollona.style.paddingLeft = "50px";
                kollona.style.paddingRight = "50px";
                kollona.style.marginTop = "60px";   
                kollona.style.marginRight = "400px";  
                kollona.style.marginLeft = "400px";  
                
                

                rinda.appendChild(poga);
                
                }   
            }
           //document.getElementById("forma").style.display = "none";
           //document.getElementById("podz").style.display = "none";
          } 
  

//let sekundes = 60;
//// funkcija atkārtoti tiks izsaukta ik pēc 1000 milisekundēm
//setInterval(function(){
//   document.getElementById("laiks").innerHTML= sekundes+" s ";
//   if (sekundes>0) sekundes--;   
//},1000);
//
//// funkcijas izsaukšana tiek atlikta uz 11000 milisekundēm 
// setTimeout(function(){
//    document.getElementById("laiks").style.backgroundColor="red";
// },11000);


   




