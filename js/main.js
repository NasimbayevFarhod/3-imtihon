
$(".form__select").addEventListener('change',()=>{
  let hamir = $(".form__select").value

  $(".non__text").innerHTML= hamir;
})



$$(".radio__razmer-input").forEach((e) => {

  e.addEventListener('click',()=>{

    $(".razmer__text").innerHTML= e.value;
  
  });
});


var masalliqlar = [];



$$(".form-check-label").forEach((e)=>{
  let input = e.querySelector('input')

  input.addEventListener("click",()=>{



    if (input.checked == true){
      masalliqlar.push(input.name)
    }
    else 
    {
      masalliqlar.splice(masalliqlar.indexOf(input.name),1)
    }
    $(".ustida__text").innerHTML= masalliqlar.join();

    console.log($(".form-check-input"));
    if(masalliqlar[0] === undefined)
    {
      $(".form-check-input").setAttribute("required",true);
    }
    else
    {
      $(".form-check-input").removeAttribute("required",true);
    }

    console.log(masalliqlar);
  })
})

var qoshimcha = [];

$$(".form-qoshimcha-input").forEach((e)=>{
  e.addEventListener("click",()=>{
    if (e.checked == true){
      qoshimcha.push(e.name)
    }
    else 
    {
      qoshimcha.splice(qoshimcha.indexOf(e.name),1)
    }
    $(".qoshimcha__text").innerHTML= qoshimcha.join();
  })

})



















