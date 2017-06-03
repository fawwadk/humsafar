(function($){
    
    Drupal.behaviors.my_module={
        
        attach:function(context, settings){
            $("#edit-fname").addClass('myclass');
            //alert(context);
        }
    };
    
})(jQuery);