Template.globalHome.events({
    'submit form': function(e){
        e.preventDefault();
        
        Router.go('confirmacion');
    }
});

Template.globalHome.onRendered(function(){
    this.$('.datetimepicker').datetimepicker({
        format: 'L'
    });
});