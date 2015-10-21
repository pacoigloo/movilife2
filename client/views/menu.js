Template.menu.events({
    'click li.firstLine': function(e){
        var myList = $(e.target);
        var arrow = myList.children(".icon-arrow");
        myList.children("ul.list-unstyled").slideToggle(400);
        if(arrow.css("transform") == "none"){
            arrow.css("transform","rotate(180deg)");
        }else{
            arrow.css("transform","");
        }
    }
});