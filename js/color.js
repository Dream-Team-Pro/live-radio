class color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click", ()=>{
            this.select_color("color1");
        });
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click", ()=>{
            this.select_color("color2");
        });
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click", ()=>{
            this.select_color("color3");
        });
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click", ()=>{
            this.select_color("color4");
        });                  
    }

    select_color(set_color){
        if(set_color == "color1"){
            document.body.style.background = "rgb(243, 54, 234)";
        }else if(set_color == "color2"){
            document.body.style.background = "rgba(115, 118, 247, 0.986)";
        }else if(set_color == "color3"){                   
            document.body.style.background = "rgb(127, 241, 12)";
        }else if(set_color == "color4"){                   
            document.body.style.background = "rgb(240, 130, 6)";
        }      
    }    
}
onload = new color();