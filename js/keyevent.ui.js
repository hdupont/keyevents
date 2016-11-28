/**
 * Gestion de l'interface utilisateur.
 */
keyevent.ui = (function(domtk) {
	var _keyPressedOutput = document.getElementById("output");
	var _charInput = document.getElementById("nextinput");
	var _nextCharOutput = _charInput;
	
	return {
		/**
		 * Attache au body ses écouteurs d'événements.
		 * @param {function} keydownListener un écouteur de keydown
		 * @param {function} keyupListener un écouteur de keyup
		 */
		addBodyListeners: function(keydownListener, keyupListener) {
			document.body.addEventListener("keydown", keydownListener);
			document.body.addEventListener("keyup", keyupListener);
		},
		/**
		 * Attache à l'input text ses écouteurs d'événements.
		 * @param {function} keydownListener un écouteur de keydown
		 */
		addTextInputListener: function(keydownListener) {
			_charInput.addEventListener("keydown", keydownListener);
		},
		/**
		 * Affiche la string passé en paramètre au-dessus des string précédemment tapées.
		 * @param {string} infoString la string afficher à l'utilisateur
		 */
		outputKeyPressedInfo: function(infoString) {
			var infoDiv = domtk.buildTextDiv(infoString);
			domtk.prepend(_keyPressedOutput, infoDiv);
		},
		/**
		 * Remplace le contenu de l'input text avec le caractère passé en paramètre.
		 * @param {char} nextChar le caractère devant remplacé le contenu de l'input text.
		 */
		outputNextChar: function(nextChar) {
			_nextCharOutput.value = nextChar;
		}
	};
})(keyevent.domtk);
