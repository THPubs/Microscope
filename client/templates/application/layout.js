Template.layout.onRendered(function() {
    this.find('#main')._uihooks = {
        insertElement(node, next) {
                $(node)
                    .hide()
                    .insertBefore(next)
                    .fadeIn();
            },
            removeElement: function(node) {
                $(node).fadeOut(function() {
                    $(this).remove();
                });
            }
    }
});
