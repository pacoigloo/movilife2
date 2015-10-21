Template.ayudaventas.events({
    'click .btn': function(e){
        e.preventDefault();
        Router.go('globalHome');
    }
});