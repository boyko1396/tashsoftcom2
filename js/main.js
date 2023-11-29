$(document).ready(function() {
  modalFancyboxInit();

  // modal fancybox
  function modalFancyboxInit() {
    $('[data-u-modal]').fancybox({
      autoFocus: false,
      touch: false,
      afterClose: function() {
      },
      beforeShow: function() {
      }
    });
  }
});