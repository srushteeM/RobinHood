class DonateForm{
    constructor(){
        this.title=createElement('h1','DONATE FORM');
        this.timeQ1=createElement('h3',"1. When was the food prepared?");
        this.timeAns=createInput("Enter Time")
        this.mealTypeQ2=createElement('h3',"2.Is it a small meal or full meal?");
        this.mealTypeAns=createInput("Enter Meal Type");
        this.mealKindQ3=createElement('h3',"3.Is it veg or non-veg?");
        this.veg=createButton("Veg");
        this.nonveg=createButton("Non-Veg");
        this.regular=createButton("Regular");
        this.jain=createButton("Jain");
        this.quantityQ4=createElement('h3',"4.Approx number of people that can be fed.");
        this.quantityAns=createInput("Enter Approx no of people");
        this.freshQ5=createElement('h3',"5.Can the food stay fresh for more than 1 hour?");
        this.freshAns=createInput("Yes/No");
        this.submit=createButton("SUBMIT");
    }
    display(){
        this.title.position(width/2-130,20)
        this.title.style("font-size","40px")

        this.timeQ1.position(200,100);
        this.timeAns.position(200,150);

        this.mealTypeQ2.position(200,height/4-200);
        this.mealTypeAns.position(200,height/4-150);

        this.mealKindQ3.position(200,height/4-100);
        this.veg.position(200,height/4-50);
        this.nonveg.position(300,height/4-50);
        this.regular.position(200,height/4-50);
        this.regular.hide()
        this.jain.position(300,height/4-50);
        this.jain.hide()
        this.veg.mousePressed(()=>{
            this.veg.hide();
            this.nonveg.hide();
            this.regular.show();
            this.jain.show()
        })
        this.regular.mousePressed(()=>{
            kind="Regular";
            this.regular.style("background-color","red")
            this.jain.style("background-color","white")
        });
        this.jain.mousePressed(()=>{
            kind="Jain";
            this.jain.style("background-color","red")
            this.regular.style("background-color","white")
        });
        this.nonveg.mousePressed(()=>{
            kind="Non-Veg";
            this.nonveg.style("background-color","red")
        });
        this.quantityQ4.position(200,height/4);
        this.quantityAns.position(200,height/4+50);
        
        this.freshQ5.position(200,height/4+100);
        this.freshAns.position(200,height/4+150);

        this.submit.position(width/2,height/2-100)
        this.submit.mousePressed(()=>{

            this.title.hide()
            this.timeQ1.hide()
            this.timeAns.hide()
            this.mealTypeQ2.hide()
            this.mealTypeAns.hide()
            this.mealKindQ3.hide()
            this.veg.hide()
            this.nonveg.hide()
            this.regular.hide()
            this.jain.hide()
            this.quantityQ4.hide()
            this.quantityAns.hide()
            this.freshQ5.hide()
            this.freshAns.hide()
            this.submit.hide()

            donorInfo=new DonorInfo();
            donorInfo.display();

            food.fresh=this.freshAns.value();
            food.mealType=this.mealTypeAns.value();
            food.mealKind=kind;
            food.quantity=this.quantityAns.value();
            food.time=this.timeAns.value();
            food.updateInfo(food.fresh,food.mealType,food.mealKind, food.quantity,food.time);
        })
    }
}