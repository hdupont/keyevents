/**
 * Ce programme affiche à l'utilisateur des informations concernant les
 * touches qu'il tape. Les informations affichées sont :
 * - le caractère correspondant à la touche tapée.
 * - le code correspondant à ce caractère
 * - les touches de combinaison éventuellement enfoncées lorsque la touche a été tapée.
 * 
 * NB. Les touches de combinaisons sont : Alt, Ctrl et Maj.
 *     (cf. https://fr.wikipedia.org/wiki/Touche_de_combinaison).
 */
(function(keys, ui) {
	
	/**
	 * Enregistre les touches tapées et affiche les informations les concernant.
	 * @param {event} event l'événement généré par l'appuie (keydown) d'une touche.
	 */
	function bodyKeydownListener(event) {
		if (keys.wasAlreadyPressed(event)) {
			return;
		}
		else {
			keys.recordKey(event)
		}
		
		var infoString = keyevent.keys.buildInfoString(event, event.key, event.keyCode)
		ui.outputKeyPressedInfo(infoString);
	}
	
	/**
	 * Vide l'historique des touches tapées.
	 */
	function bodyKeyupListener() {	
		keys.clear();
	}
	
	/**
	 * Affiche le caractère qui suit celui qui a été tapé. 
	 * @param {event} event l'événement généré par l'appuie (keydown) d'une touche.
	 */
	function inputKeydownListener(event) {
		event.stopPropagation();
		event.preventDefault();
		ui.outputNextChar(keys.nextChar(event.key));
	}
	
	// Initialisation de l'interface utilisateur.
	ui.addBodyListeners(bodyKeydownListener, bodyKeyupListener);
	ui.addTextInputListener(inputKeydownListener);
	
})(keyevent.keys, keyevent.ui);
