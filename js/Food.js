class Food{
    constructor(){
        this.fresh=null;
        this.mealType=null;
        this.mealKind=null;
        this.quantity=null;
        this.time=null;
    }
    updateInfo(fresh,mealType,mealKind,quantity,time){
        db.ref("FoodInfo").update({
            fresh:fresh,
            mealType:mealType,
            mealKind:mealKind,
            quantity:quantity,
            time:time
        })
    }
}