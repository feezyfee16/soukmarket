$(function() {
	//Resoudre probleme emplacement menu
	switch(menu) {
	
	case 'A Propos':
		$('#about').addClass('active');
		break;
	case 'Contactez Nous':
		$('#contact').addClass('active');
		break;
	default:
		$('#home').addClass('active');
		break;
	
	}
	
	
	
	
});