// Este codigo ha sido generado por el modulo psexport 20180802-l64 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function divisible() {
	var c, i, n;
	document.write("Ingresa el tamano de la lista",'<BR/>');
	n = Number(prompt());
	var lista = new Array(n+1);
	for (i=1;i<=n;i++) {
		lista[i-1] = i;
	}
	for (i=1;i<=n;i++) {
		c = lista[i-1]%2;
		if (c==0) {
			document.write("Es divisible entre 2 ",lista[i-1],'<BR/>');
		}
		c = lista[i-1]%3;
		if (c==0) {
			document.write("Es divisible entre 3 ",lista[i-1],'<BR/>');
		}
	}
}

