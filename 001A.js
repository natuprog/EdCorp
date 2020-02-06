function button0(){return 0;}function button1(){return 1;}function button2(){return 2;}function button3(){return 3;}function button4(){return 4;}
function button5(){return 5;}
function buttonClicked(pointer){var elem1 = document.getElementsByClassName('menu')[0];if(pointer == 0){dat = ['foto1.png', 'texto1', 'foto2.png', 'texto2'];
 elem1.innerHTML+=""}else if(pointer == 1){}else if(pointer == 2){}else if(pointer == 3){}else if(pointer == 4){}
else if(pointer == 5){}}
function setTopMenu(){setInterval(function(){if(window.pageYOffset > 201){var  elem = document.getElementsByClassName('men')[0]; elem.style.position = "fixed";elem.style.width = "100;";
elem.style.height = "30px;";
}else{var elem = document.getElementsByClassName('men')[0]; elem.style.position = "relative"; elem.style.width = "100%"; elem.style.height = "100%";
elem.style.top = "0"; elem.style.left = "0";}
//setTopMenu();
//Aqui ira AJAX 
function selectButton(item){
    var elem = document.getElementsByTagName('main')[0];
    switch(item){
        case 1:
            elem.innerHTML = "";
            break;
            case 2:
                elem.innerHTML = "";
                break;
                case 3:
                    elem.innerHTML = "";
                    break;
                    case 4:
                        elem.innerHTML = "";
                        break;
                        case 5:
                            elem.innerHTML = "";
                            break;
                            case 6:
                                elem.innerHTML = "";
                                break;
                                default:
                                    alert("Error 501. Page items dont Log :(");
    
    }
}
                                             
                                             
function  mov(){
 setInterval(()=>{
  window.onmousemove = () => {
    var x = window.event.clientX;
    var y = window.event.clientY;
   document.getElementById('fio').style.left = x + "px";
   document.getElementById('fio').style.top = y + "px";
   
   
}
 },10);
}
