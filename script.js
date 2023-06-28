$('#document-font-size-control').on('change', function() {
  $('html').css('font-size', $(this).val() + 'px');
});

$('input[type="radio"]').on('change', function() {
	$('html').removeAttr('class').addClass($(this).val());	
});

$('#remove-font-size').on('click', function() {
	$('html').removeAttr('style');
})