function calculaAngulo (hora,min){
	If (hora>12) {hora -= 12}
	var calHora = hora * 5 + min * 5 / 60;
	var calMin = calHora - min;
	var angulo = Calmin * 360/60;
	return angulo;
}