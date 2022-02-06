var input=document.querySelector("input");
var button=document.querySelector("button");
button.addEventListener("click",add);
function add(e){
    var notcompleted=document.querySelector(".notcompleted");
    var completed=document.querySelector(".completed");
    var newli=document.createElement("li");
    var checkbtn=document.createElement("i");
    var dltbtn=document.createElement("i");
    checkbtn.style.float="right";
    checkbtn.style.padding="5px";
    
    dltbtn.style.padding="5px";
   dltbtn.style.float="right";
   
    checkbtn.innerHTML='<i class="fa fa-check"></i>';
    dltbtn.innerHTML= '<i class="fa fa-trash"></i>';
    if(input.value!=='')
    {
        newli.textContent=input.value;
        input.value='';
        notcompleted.appendChild(newli);
        newli.appendChild( checkbtn);
        newli.appendChild( dltbtn);

    }
    checkbtn.addEventListener("click",function(){
    var parent=this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkbtn.style.display="none";

});
dltbtn.addEventListener("click",function(){
    var parent=this.parentNode;
    parent.remove();
    

});

}