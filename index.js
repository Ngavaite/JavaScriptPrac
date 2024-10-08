window.onload = function(){

    const person = {
        firstName:"Artwell",
        middleName:"Ngavaite",
        lastName:"Begede",
        fullName:function(){
            return this.firstName + " " + this.middleName.charAt(0) + " " + this.lastName;}
    }
    function displayFullname(){
        let fName = person.fullName();
        document.getElementById('demo').innerHTML = fName;
        console.log(fName);
    }
    window.displayFullname = displayFullname;
}
