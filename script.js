const count = document.getElementById('count');



let a=0;
function add(){

    if(a<25){
        a++;
        count.textContent=a;
       a++;
    }
    
   
}
function sub(){
      if(a>0){
        a--;
       count.textContent=a;
    }
}


function res(){
    a=0;
   count.textContent=a;
   
    

}