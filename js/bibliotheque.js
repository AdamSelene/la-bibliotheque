$.ajaxChimp.translations = {
    'fr': {
        'submit': 'Enregistrement en cours…',
        0: 'Nous vous avons envoyé un email de confirmation',
        1: 'Veuillez entrer une adresse email',
        2: 'Une adresse email doit contenir un seul @',
        3: 'La partie domaine de l\'adresse email n\'est pas valide (la partie après le @:)',
        4: 'La partie nom d\'utilisateur de l\'adresse email n\'est pas valide (la partie avant le signe @:)',
        5: 'Cette adresse email ne semble pas valide'
    }
};


$(document).ready(function() {
	$('#mc-form').ajaxChimp({
		url: 'http://la-bibliotheque.us10.list-manage.com/subscribe/post?u=505d654d642cc81df6b68d26b&amp;id=f078bfee9c',
		callback: function(resp) {
			$('#mc-form label.sr-only').removeClass('sr-only');
			if (resp.result == 'error') {
				$('#mc-form .form-group').addClass('has-error');
			} else {
				$('#mc-form .form-group').removeClass('has-error').addClass('has-success');
				$('#mc-form input').val('');
			}
		},
		language: 'fr'
	});
});
