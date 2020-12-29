class DonorInfo{
    constructor(){
        this.title=createElement('h1','DONATE Information');
        this.nameQ1=createElement('h3',"1. Full Name");
        this.nameAns=createInput("Enter Full Name");
        this.contactQ2=createElement('h3',"2.Contact Number");
        this.contactAns=createInput("");
        this.emailQ4=createElement('h3',"3.Enter Email Id");
        this.emailAns=createInput("email id");
        this.addressQ5=createElement('h3',"4.Enter Address");
        this.addressAns=createInput("address");
        this.submit=createButton("SUBMIT");
        this.message=createElement("h1");
    }
    display(){
        this.title.position(width/2-130,20)
        this.title.style("font-size","40px")

        this.nameQ1.position(200,100);
        this.nameAns.position(200,150);

        this.contactQ2.position(200,height/4-200);
        this.contactAns.position(200,height/4-150);

        this.emailQ4.position(200,height/4-100);
        this.emailAns.position(200,height/4-50);
       
        this.addressQ5.position(200,height/4);
        this.addressAns.position(200,height/4+50);

        this.submit.position(width/2,height/2-200);

        this.submit.mousePressed(()=>{
            this.title.hide();
            this.nameQ1.hide();
            this.nameAns.hide();
            this.contactQ2.hide();
            this.contactAns.hide();
            this.emailQ4.hide();
            this.emailAns.hide();
            this.addressQ5.hide();
            this.addressAns.hide();
            this.submit.hide();

            donor.name=this.nameAns.value();
            donor.address=this.addressAns.value();
            donor.email=this.emailAns.value();
            donor.contact=this.contactAns.value();

            donor.updateInfo(donor.name, donor.address,donor.email,donor.contact);

            this.message.html("Your information has been sent to the ROBINS.\t   He/She will be contacting you shortly");
            this.message.position(width/2-600,400);
        })
        
    }
}