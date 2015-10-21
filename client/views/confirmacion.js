Template.confirmacion.events({
    'click #editar': function(e){
        e.preventDefault();
        Router.go('globalHome');
    },
    
    'click #confirmar': function(e){
        e.preventDefault();
        Router.go('poliza');
    }
});