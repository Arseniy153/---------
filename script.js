const q = [
    "Яка мова програмування є основною для розробки веб-сторінок на клієнтській стороні?",
    "Який тип пам'яті є тимчасовим і швидким, але втрачає дані після вимкнення комп'ютера?",
    "Який формат файлів часто використовують для зображень у Інтернеті через його стиснення без втрат якості?"
   ]
  
  const a = [
    "javascript",
    "ram",
    "png"
   ]
   const qq = document.querySelector(".q")
   const aa = document.querySelector(".a")
   
   console.log(qq)
   console.log(aa)
   
   let randomWordLength = 0
   let zm = 0
   
   function round(){
     const random = Math.trunc(Math.random()*8)
     randomWordLength = a[random].length
   
   qq.textContent = q[random]
   
   for(let i = 0; i < a[random].length; i++){
     const el = document.createElement("p")
     aa.appendChild(el)
   }
     
   let kvadra = document.querySelectorAll("p")
   if(kvadra.length > randomWordLength){
     for(let i = 0; i < kvadra.length - randomWordLength; i++){
       kvadra[i].style.display = "none"
   }
   }
   
   const letters = document.querySelectorAll(".letter")
   
   for (let letter = 0; letter < letters.length; letter++){
       letters[letter].addEventListener("click" , function(){
       for(let k = 0; k < a[random].length; k++){
         
     if (a[random][k] == this.textContent){
       kvadra[k + zm].textContent = this.textContent
     if(Array.from(kvadra).every(item => item.textContent != ""))
   {
         zm += randomWordLength
         round()
   }
   }
   }
   }) 
   }
   }
   round()