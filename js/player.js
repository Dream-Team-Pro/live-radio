class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_file = document.getElementById("title_file");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPalyed;
    
        this.names_radio =[];
        this.names_radio[0] = "Q-music";
        this.names_radio[1] = "Bhotradio";
        this.names_radio[2] = "Studio 24";
        this.names_radio[3] = "Oradio Antwerpen";

        this.source_radio =[];            
        this.source_radio[0] = "https://21293.live.streamtheworld.com/QMUSIC.mp3";            
        this.source_radio[1] = "https://www.clubfmserver.be/radioclubfm.mp3";            
        this.source_radio[2] = "http://streaming.radionomy.com/JamendoLounge?lang=ar-EG%2car%3bq%3d0.9%2cen-US%3bq%3d0.8%2cen%3bq%3d0.7";            
        this.source_radio[3] = "http://82.94.204.95:80/live";   
        
        this.server = 0; 
        
        this.setResouce();  
   
        document.getElementById("next").addEventListener("click", ()=>{
            if(this.server < this.source_radio.length - 1){
                ++this.server;
                this.isPalyed = true;
            }else {
                this.server = 0;
            }           
            this.isPalyed = false;
            this.play_pause();
        });
        document.getElementById("prev").addEventListener("click", ()=>{
            if(this.server > 0){
                --this.server;
            }else {
                this.server = this.source_radio.length - 1;
            }
            this.isPalyed = false;
            this.play_pause();
        });

        this.play_pause_button.addEventListener("click", ()=>{
            this.setResouce();
            this.play_pause();
        });    
    }

    setResouce(){
        document.getElementById("audio_file").src = this.source_radio[this.server];
        document.getElementById("title_file").innerHTML = this.names_radio[this.server];
    }

    play_pause(){
        if(this.isPalyed == false){
            this.setResouce();
            this.play_pause_button.src="./img/pause.png";
            this.audio_file.play();
            this.isPalyed = true; 
        }else {
            this.setResouce();
            this.play_pause_button.src="./img/play.png";            
            this.audio_file.pause();
            this.isPalyed = false;            
        }
    }
}
onload = new Audio_Player();