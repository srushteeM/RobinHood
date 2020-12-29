class HomeScreen{
    constructor(){
        this.title=createElement('h1','ROBINHOOD ARMY');
        this.image=createImg("https://pbs.twimg.com/media/DQNp2SjWsAAThbN.jpg");
        this.donate=createButton("DONATE")
    }

    display(){
        this.title.position(width/2-130,20)
        this.title.style("font-size","40px")


        this.image.position(width/4,height/2-650)

        
        this.donate.position(width/2-100,height-150);
        this.donate.size(200,50)
        this.donate.style("font-size","30px");
        this.donate.style("background-color","#023919")
        this.donate.style("color","#ffffff");

        this.donate.mousePressed(()=>{
            this.title.hide();
            this.image.hide();
            this.donate.hide();

            donateForm=new DonateForm();
            donateForm.display();
        })
    }
}