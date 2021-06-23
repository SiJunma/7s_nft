$(document).ready(function(){
	$('input').change(function() {
		let el = $(this).parent().parent();
		if ($(this).val()) {
			el.addClass('success');
			el.removeClass('error');
		} else {
			el.addClass('error');
			el.removeClass('success');
		}
	});
});


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});