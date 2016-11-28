/**
 * Boite à outils pour travailler le dom.
 */
keyevent.domtk = (function() {
	return {
		/**
		 * Construit un div contenant le chaine passée en paramètre.
		 * @param {string} string la chaine de caractère que contiendra le div.
		 * @returns {Element} un div contenant la chaine de caractère string.
		 */
		buildTextDiv: function(string) {
			var container = document.createElement("div");
			var infoNode = document.createTextNode(string);
			container.appendChild(infoNode);
			return container;
		},
		prepend: function(parent, node) {
			parent.insertBefore(node, parent.firstChild)
		},
		output: function(outputNode, infoString) {
			var infoDiv = this.buildTextDiv(infoString);
			this.prepend(outputNode, infoDiv);
		}
	};
})();
