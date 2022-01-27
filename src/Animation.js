window.addEventListener("scroll",function(){

    let DragonAzul = document.getElementById("Dragon-Azul");

   let altura = window.innerHeight/3;

   let distancia = DragonAzul.getBoundingClientRect().top;

   


   console.log(altura)
   console.log(distancia)

   if(distancia <= altura){

    DragonAzul.classList.add(".Dragon-Azul-Animation",".translate");


   }

   else {
       DragonAzul.classList.remove(".Dragon-Azul-Animation","translate");
   }




});



