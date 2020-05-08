'use strict';


document.addEventListener("DOMContentLoaded",function () {
    create();
      let hide_all =document.querySelectorAll("div.lvl_altar");
          //  console.dir(hide_all);
   $(hide_all).hide();
      hide_all =document.querySelectorAll("div.lvl_runs");
   $(hide_all).hide();
  if( !$("div#box_runs i").is(':hidden')) $("div#box_runs i").hide();
       $("#info").hide();


});

       let  map_img_t = document.getElementById("map_img");
       box_all.addEventListener("click",check_for_all);
       box_1_6.addEventListener("click",function(){for_check("box_1_6");});
       box_7_15.addEventListener("click",function(){for_check("box_7_15");});
       box_16_25.addEventListener("click",function(){for_check("box_16_25");});
       box_bosses.addEventListener("click",function(){for_check("box_bosses");});
       box_altar.addEventListener("click",function(){for_check("box_altar");});
       box_runs.addEventListener("click",function(){for_check("box_runs");});
       box_1_6_solo.addEventListener("click",function(){for_check("box_1_6_solo");});
       box_7_15_solo.addEventListener("click",function(){for_check("box_7_15_solo");});
       box_16_25_solo.addEventListener("click",function(){for_check("box_16_25_solo");});
 ///------------------------------PART 2 ------------------------------------------------------------
     map_img.addEventListener("click", getCoords,false);

    function getCoords() {
      //  FATAL_ERROR
                      //offset это начало координат  элемента. тотал
                        this.value = "pageX="+event.pageX+"  pageY="+event.pageY;
                        console.dir(this.value+ "  clientX = " + event.clientX+' clientY:'+event.clientY);
                        console.dir(document.getElementById("map_img") );
                       // console.dir(document.getElementById("hov") );
                        console.dir("pageX-ofsX="+(event.pageX-map_img_t.offsetLeft)+"  pageY-ofsY="+(event.pageY-map_img_t.offsetTop));

                        let divX=event.pageX-map_img_t.offsetLeft, divY = event.pageY-map_img_t.offsetTop;
                        let mobs = new point(divX,divY,1007,"orange_romb");
                        mobs.Show();
 
}
          


function X_Y(argument) {
     inp = document.forms[0].elements[0].value;
     myMove(inp);   
}

function create(){
    let class_for_color;
              ALL.forEach( (item,i,arr)=>{
                //console.log(item.getX);
                //console.log(item.getY);
                //console.dir(item.get_RealLVL);
                if (item.getLVL == 1) {class_for_color = "lvl_1_7_group"}
                else if (item.getLVL == 7) {class_for_color = "lvl_7_15_group"}
                else if (item.getLVL == 16) {class_for_color = "lvl_16_25_group"}
                else if (item.getLVL == 100) {class_for_color = "lvl_bosses_group"}
                else if (item.getLVL == 1001) {class_for_color = "lvl_1_7_group_solo"}
                else if (item.getLVL == 1007) {class_for_color = "lvl_7_15_group_solo"}
                else if (item.getLVL == 1016) {class_for_color = "lvl_16_25_group_solo"}
                else if (item.getLVL == 101) {class_for_color = "lvl_altar"}
                else if (item.getLVL == 102) {class_for_color = "lvl_runs"} 
                     map_img_t.insertAdjacentHTML("afterBegin", "<div data-LVL=\""+item.get_RealLVL+"\" class=\""+class_for_color+"\" id=\"id_point_"+(i+1)+"\"></div>");   
                        document.getElementById("id_point_"+(i+1)).style.transform = "translate("+(item.getX-10)+"px,"+(item.getY-10)+"px)";  
                        if (class_for_color == "lvl_altar") { document.getElementById("id_point_"+(i+1)).innerHTML = "<i class=\"ion-heart-broken\">";document.getElementById("id_point_"+(i+1)).id = ""}
                        if (class_for_color == "lvl_runs") { document.getElementById("id_point_"+(i+1)).innerHTML = "<i class=\"ion-ios-bolt\">";document.getElementById("id_point_"+(i+1)).id = ""}
              });           
}

 function for_check(el) {
    let type ="."+document.getElementById(el).dataset.id;
        //  console.dir(type);
        let for_show =document.querySelectorAll(type);
        let chbox =document.querySelector('#'+el+' input');
         //   console.dir(for_show);
        //   console.dir(chbox);
    //($(chbox).is(':checked'))? $(chbox).removeAttr("checked"):$(chbox).attr("checked", "checked");
    //Hide_ALL();
    //Hide_ALL_inMenu();

    Hide_cur_lvl(document.querySelector('#inside_SL').innerText);
    if      ($(chbox).is(':checked')){
        $(chbox).removeAttr("checked");
         $(for_show).hide();      
       // for_show.forEach((item)=>{item.style.display="none";})
    }
    else {
        $(chbox).attr("checked", "checked");
         $(for_show).show();        
      //  for_show.forEach((item)=>{item.style.display="block";});
    }
 }
    //.attr(attrName, value)
   function   check_for_all (){
        let xxx =document.querySelectorAll('#map_img div');
       //  console.dir(xxx);
       if($('#box_all_inp').is(':checked')){
         $(xxx).hide();
        let x11 = document.querySelectorAll("div.ch_ input");
       $(x11).removeAttr("checked", "checked");
        let x22 = document.querySelectorAll("div.ch_ div");
       $(x22).hide();
        let x33 = document.querySelectorAll("div.ch_ i");
       $(x33).hide();
      // box_all_inp.innerHTML = "Cпрятать все"; 
       }
        else {
       $(xxx).show();
        let x11 = document.querySelectorAll("div.ch_ input");
       $(x11).attr("checked", "checked");
        let x22 = document.querySelectorAll("div.ch_ div");
       $(x22).show();
        let x33 = document.querySelectorAll("div.ch_ i");
       $(x33).show();
       //box_all_inp.innerHTML = "Cпрятать все";
      
       //console.dir(x33);
       }   
   }

function  SELECT_CHECKBOX(){
  if ($("#sel_picked").is(':checked')) {
    return  document.getElementById("sel_picked").id;
  }
  else return  document.getElementById("sel_befor").id;
}

// 1 2 4 5 7 9 11 13 15 19 20 22  


 $(     $( "#slider" ).slider({      value:0,      min: 0,      max:110,      step: 10,
      slide: function( event, ui ) { 
      switch(ui.value) {
      case 0: { $("#info").text("1"); 
      if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_1_7_group");  
            }
        else{ 
            //Later
         }  
       } 
        break;
         case 10: {$("#info").text("2");  
          if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_1_7_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 20: { $("#info").text("4"); 
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_1_7_group");  
           }
        else{ 
            //Later
         }  
       } 
        break;
         case 30:  {$("#info").text("5");
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_1_7_group");  
           }
        else{ 
            //Later
         }  
       }  
        break;
         case 40:  {$("#info").text("7"); 
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_7_15_group");  
           }
        else{ 
            //Later
         }  
       } 
        break;        
         case 50:  {$("#info").text("9");  
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_7_15_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 60:  {$("#info").text("11");
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_7_15_group");  
           }
        else{ 
            //Later
         }  
       }  
        break;
         case 70:  {$("#info").text("13");  
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_7_15_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 80:  {$("#info").text("16");  
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_16_25_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 90:  {$("#info").text("19");  
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_16_25_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 100:  {$("#info").text("20");  
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_16_25_group");  
           }
        else{ 
            //Later
         }  
       }
        break;
         case 110:  {$("#info").text("22"); 
         if ("sel_picked"==SELECT_CHECKBOX()) {   // console.dir(event.target.innerText);  
          Hide_ALL();          
          Show_cur_lvl(event.target.innerText);
          Show_cur_inMenu("lvl_16_25_group");  
           }
        else{ 
            //Later
         }  
       } 
        break;
  default:
    $("#info").text("Error");
    break;}         
      },
      start: function( event, ui ) {
       // console.dir(event.target.innerText);
         //Hide_cur_lvl(event.target.innerText);
         $("#inside_SL").html("<span id=\"info\">"+event.target.innerText+"</span>");
         $("#info").show();
       // console.dir(sel);
      },
      stop: function( event, ui ) {

       $("#inside_SL").text($("#info").text());
       $("#info").hide();
      }
    })
   // $( "#info" ).val( "$" + $( "#slider" ).slider( "value" ) )// ??
   );

 function Show_cur_lvl(lvl){
  var LF_string = "[data-lvl=\""+lvl+"\"]"
  var elements_forShow = document.querySelectorAll(LF_string);
  $(elements_forShow).show();

 }

 function Hide_cur_lvl(lvl){
  let LF_string = "[data-lvl=\""+lvl+"\"]"
  let elements_forShow = document.querySelectorAll(LF_string);
  $(elements_forShow).hide();
  console.dir(elements_forShow);
  let LF_menu = "div .ch_ ."+$(elements_forShow[0]).attr('class');
   // var className = "div .ch_ ."+gg;
 // console.dir(className);

   // var gg2 = $(gg);

 // console.dir("gg2");
  //console.dir(gg2);
  $(LF_menu).hide();
  //console.dir($(className));


 }

 function Hide_ALL(){  
 $('*[data-lvl]').hide();
 }

 function Show_cur_inMenu(group){  
  Hide_ALL_inMenu();
  let t_str = "div .ch_ ."+group; 
  //console.dir($(t_str)); 
  $(t_str).show();
   }

  function Hide_ALL_inMenu(){  
  $('div .ch_ div').hide();
   $('.lvl_runs').hide();
   $('.lvl_altar').hide();  
 }
      