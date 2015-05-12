if (!RedactorPlugins) var RedactorPlugins = {};

(function($) {
  RedactorPlugins.undoredo = function () {
    return {
      init: function () {
        var undo = this.button.addAfter('html', 'undo', 'Undo');
        var redo = this.button.addAfter('undo', 'redo', 'Redo');

        this.button.addCallback(undo, this.buffer.undo);
        this.button.addCallback(redo, this.buffer.redo);
      }
    };
  };
})(jQuery);