class Donor{
    constructor(){
        this.name=null;
        this.address=null;
        this.email=null;
        this.contact=null;
    }
    updateInfo(name,address,email,contact){
        db.ref("DonorInfo").update({
            address:address,
            contact:contact,
            email:email,
            name:name
        })
    }
}