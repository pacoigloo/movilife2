Template.login.events({
    'submit form': function(e){
        e.preventDefault();
        Router.go('menu');
        /*var loginEmail = event.target.inputEmail.value;
        var loginPassword = event.target.inputPassword.value;
        console.log("Guarda");
        console.log("LoginEmail: "+loginEmail);
        console.log("LoginPass: "+loginPassword);
        Meteor.loginWithPassword(loginEmail,loginPassword, function(e){
            if(e){
                if(e="User not found"){
                    console.log("El usuario no existe");
                }else if(e="Incorrect password"){
                    console.log("Contraseña incorrecta");
                }
            }else{
                Router.go('menu');
            }
        });*/
    },
    'click #recordar': function(e){
        e.preventDefault();
        Router.go('recordar');
    }
});