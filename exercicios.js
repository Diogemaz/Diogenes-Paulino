function l1e1(){
	var a = document.all['valor1'].value;
	var b = document.all['valor2'].value;
	var c = document.all['valor3'].value;
	var delta = (b*b)-(4*a*c);
	var raizdelta = Math.sqrt(delta);
	if (delta<0) {
		var resp = "Não nenhuma raiz";
		document.all['resp'].textContent = resp;
	}
	if (delta == 0) {
		var raiz = ((b*(-1)) + raizdelta)/(2*a);
		document.all['resp'].textContent = "X1 = "+raiz.toFixed(2);
	}
	if (delta>0) {
		var raiz = ((b*(-1)) + raizdelta)/(2*a);
		var raiz2 = ((b*(-1)) - raizdelta)/(2*a);
		document.all['resp'].innerHTML = "X1 = "+raiz.toFixed(2)+"<br>"+"X1 = "+raiz2.toFixed(2);
	}

}
function l1e2(){
	var n1 = Number(document.all['valor1'].value.replace(",","."));
	var n2 = Number(document.all['valor2'].value.replace(",","."));
	var n3 = Number(document.all['valor3'].value.replace(",","."));
	var notaF = (n1*0.2)+(n2*0.3)+(n3*0.5);
	if(notaF >= 8.0 && notaF <= 10.0 ){
		var resp = "Conceito A";
	}
	if(notaF >= 7.0 && notaF <= 7.9 ){
		var resp = "Conceito B";
	}
	if(notaF >= 6.0 && notaF <= 6.9 ){
		var resp = "Conceito C";
	}
	if(notaF >= 5.0 && notaF <= 5.9 ){
		var resp = "Conceito D";
	}
	if(notaF >= 0.0 && notaF <= 4.9 ){
		var resp = "Conceito E";
	}
	document.all['resp'].innerHTML = "Nota final "+notaF+", ";
	document.all['resp'].textContent += resp;
}
function l1e3(){
	var n1 = Number(document.all['valor1'].value);
	var n2 = Number(document.all['valor2'].value);
	var n3 = Number(document.all['valor3'].value);
	if (n1<n2 && n1<n3 && n2<n3) {
		document.all['resp'].textContent = "Ordem crescente "+n1+", "+n2+", "+n3;
	}
	else if (n1<n2 && n1<n3 && n3<n2) {
		document.all['resp'].textContent = "Ordem crescente "+n1+", "+n3+", "+n2;	
	}
	else if (n2<n1 && n2<n3 && n1<n3) {
		document.all['resp'].textContent = "Ordem crescente "+n2+", "+n1+", "+n3;	
	}
	else if (n2<n1 && n2<n3 && n3<n1) {
		document.all['resp'].textContent = "Ordem crescente "+n2+", "+n3+", "+n1;	
	}
	else if (n3<n1 && n3<n2 && n1<n2) {
		document.all['resp'].textContent = "Ordem crescente "+n3+", "+n1+", "+n2;	
	}
	else if (n3<n1 && n3<n2 && n2<n1) {
		document.all['resp'].textContent = "Ordem crescente "+n3+", "+n2+", "+n1;	
	}
	else{
		document.all['resp'].textContent = "Números não podem ser iguais";
	}
}
function l1e4(){
	var dia1 = Number(document.all['valor1'].value);
	var mes1 = Number(document.all['valor2'].value);
	var ano1 = Number(document.all['valor3'].value);
	var dia2 = Number(document.all['valor4'].value);
	var mes2 = Number(document.all['valor5'].value);
	var ano2 = Number(document.all['valor6'].value);
	if(ano1 > ano2){
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia1+"/"+mes1+"/"+ano1;
	}
	else if (ano2 > ano1) {
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia2+"/"+mes2+"/"+ano2;	
	}
	else if (mes1 > mes2) {
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia1+"/"+mes1+"/"+ano1;	
	}
	else if (mes2 > mes1) {
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia2+"/"+mes2+"/"+ano2;	
	}
	else if (dia1 > dia2) {
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia1+"/"+mes1+"/"+ano1;	
	}
	else if (dia2 > dia1) {
		document.all['resp'].textContent = "A data cronológicamente maior é "+dia2+"/"+mes2+"/"+ano2;	
	}
	else{
		document.all['resp'].textContent = "As datas são cronológicamente iguais ";		
	}
}

//--------------------------------------------------------------------------------
function l1e5(){
	var opcao = document.all['opcao'].value;
	if(opcao == "--"){
		document.all['resp'].innerHTML = "";
		document.all['espaco'].innerHTML = "";
	}
	if (opcao == 1) {
		document.all['resp'].innerHTML = "";
		document.all['espaco'].innerHTML = "";
		var campo = document.createElement("input");
		campo.id ="num1";
		var campo2 = document.createElement("input");
		campo2.id ="num2";
		var btn= document.createElement("button");
  		btn.addEventListener('click', function() {
        var num1 = Number(document.all['num1'].value);
        var num2 = Number(document.all['num2'].value);
        var resp = num1 + num2;
        document.all['resp'].textContent = "Resposta: "+resp;
    })
  		btn.innerHTML ="Enviar";
  		document.all['espaco'].innerHTML += "Número 1: ";
  		document.all['espaco'].appendChild(campo);
  		document.all['espaco'].innerHTML += "<br>";
  		document.all['espaco'].innerHTML += "Número 2: ";
  		document.all['espaco'].appendChild(campo2);
  		document.all['num1'].setAttribute("type", "text");
  		document.all['num2'].setAttribute("type", "text");
  		document.all['espaco'].innerHTML += "<br>";
  		document.all['espaco'].appendChild(btn);
	}
	if (opcao == 2) {
		document.all['resp'].innerHTML = "";
		document.all['espaco'].innerHTML = "";
		var campo = document.createElement("input");
		campo.id ="num1";
		var btn= document.createElement("button");
  		btn.addEventListener('click', function() {
        var num1 = Number(document.all['num1'].value);
     	var resp = Math.sqrt(num1);
        document.all['resp'].textContent = "Resposta: "+resp;
    });
  		btn.innerHTML ="Enviar";
  		document.all['espaco'].innerHTML += "Número: ";
  		document.all['espaco'].appendChild(campo);
  		document.all['espaco'].innerHTML += "<br>";
  		document.all['num1'].setAttribute("type", "text");
  		document.all['espaco'].innerHTML += "<br>";
  		document.all['espaco'].appendChild(btn);
	}
}
//---------------------------------------------------------------------------------

function l2e1() {
	for (x=1; x<=25; x++){
	var valor = Number(prompt("Digite o salário:").replace(",","."));
	if(valor<=500.00){
		var bonif = (valor*5)/100;
	}
	else if(valor<= 1200.00){
		var bonif = (valor*12)/100;
	}
	else if (valor > 1200.00) {
		var bonif = 0;
	}
	if (valor<=600.00) {
		var Aescol = 150.00;
	}
	else if (valor > 600.00) {
		var Aescol = 100.00;
	}
	var resp = valor+bonif+Aescol;
	document.all['resp'].innerHTML += "Novo salário: "+resp+"<br>";
	}
}
function l2e2(){
	var num = Number(document.all['num'].value);
	for (var i = 1; i <= num; i++) {
		if (i == 1) {
			var cont = 1;
		}
		else if(num%i == 0){
			cont = cont + 1;
		}
	}
	if (cont == 2){
		document.all['resp'].innerHTML = "O Número "+num+" é primo!";
	}
	else{

		document.all['resp'].innerHTML = "O Número "+num+" Não é primo!";
	}
}
function l2e3(){
    var num = Number(document.all['num'].value);
    var numero = 0;
    var proximo = 1;
    var auxiliar;
    document.all['resp'].textContent = "";
    for (var i = 1; i <= num; i++) {
    			if(i == num){
    				document.all['resp'].textContent += numero;
                }else{
                document.all['resp'].textContent += numero+", ";}
                auxiliar = proximo;
                proximo = proximo + numero;
                numero = auxiliar;
        }
}
function l2e4(){
	var tinto = 0;
	var rose = 0;
	var branco = 0;
	    document.all['resp'].textContent = "";
    for (var i = 1; i <= 50; i++) {
           var valor = Number(prompt("Escolha entre as opcões de vinho 1–Tinto 2-Branco 3- Rosê:"));
           if(valor == 1){
           	var tinto = tinto + 1;
           }
           if(valor == 2){
           	var branco = branco + 1;
           }
           if(valor == 3){
           	var rose = rose + 1;
           }
		}
    var pocT = (tinto/50)*100;
    var pocB = (branco/50)*100;
    var pocR = (rose/50)*100;	
    document.all['resp'].innerHTML = "Tinto: "+pocT+"%<br> Branco: "+pocB+"%<br> Rosê: "+pocR+"%";
}
function l3e1(){
	document.all['resp'].innerHTML = "";	
	var valor = [];
    for (x=0; x<8; x++){
		valor[x] = Number(prompt("Digite um número:"));
		}
		var v1 = [];
		var v2 = [];
	for (i=0; i<8; i++){
		if(valor[i] < 0 ){
			v2[i] = valor[i];
		}
		if(valor[i] > 0 ){
			v1[i] = valor[i];
		}
	}
	document.all['resp'].innerHTML += "vetor inicial: "+valor.join(', ')+"<br>";
	document.all['resp'].innerHTML += "Novos vetores: <br> Vetor positivo :"+v1.join(' ')+"<br>Vetor negativo :"+v2.join(' ');
}
function l3e2(){
	document.all['resp'].innerHTML = "";	
	var valor = [];
    for (x=0; x<8; x++){
		valor[x] = Number(prompt("Digite um número:"));
		}
		var n = 0;
	for (i=0; i<8; i++){
		if(valor[i] >50){
			document.all['resp'].innerHTML += "Número superior a 50:  "+valor[i]+" posição - "+i+"<br>";
		}
		if(valor[i] < 50 ){
			n++;
		}
	}
	if(n==8){
		document.all['resp'].innerHTML += "Não há números superiores a 50";
	}
}
function l3e3(){
	document.all['resp'].innerHTML = "";	
	var valor = [];
    for (x=0; x<10; x++){
		valor[x] = Number(prompt("Digite um número:"));
		}
		document.all['resp'].innerHTML += "Vetor atual: "+valor+"<br>";
	for (i=0; i<10; i++){
		var N = valor[i] % 2;
		if(N == 0){
			var num = Number(valor[i]);
			valor[i] = num+5;
		}
		if(N > 0){
			valor[i] = Number(valor[i]) * 5;
		}
	}
		document.all['resp'].innerHTML += "Vetor alterado: "+valor;
}
function l3e4(){
	function crescente(a, b){
		return (a - b)
	}
	document.all['resp'].innerHTML = "";	
	var valor = [];
    for (x=0; x<10; x++){
		valor[x] = Number(prompt("Digite um número:"));
		}
		document.all['resp'].innerHTML += "Vetor em ordem: "+valor.sort(crescente)+"<br>";
	}
function l3e5(){
	document.all['resp'].innerHTML = "";	
	var valor = [];
	var n = 0;
	var nF=0;
	for (x=0; x<100; x++){
		var num = Number(prompt("Digite um número:"));
		if(num==0){
			x=100;
		}else{
		valor[x] = num;
		n++
	}}
		for(i=0; i<100; i++){
			if(valor[n-1] == valor[i]){
				nF++
			}
		}
		document.all['resp'].innerHTML += "Número de repetições: "+(nF-1)+"<br>";
	}
	