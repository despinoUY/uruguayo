var fecha;
var torneo;
var entry = jsonObject.feed.entry;

fecha  = entry[0].gsx$fecha.$t;
torneo = entry[0].gsx$torneo.$t;

if (segunda){
	renderFixtureSegunda(fecha);
} else {
	renderFixture(fecha);
}

// Loading Torneo Intermedio tables
if (torneo == "Intermedio"){
	let iter = 0;
	$(entry).each(function(){
		if (iter < 8){
			if (Math.floor(iter % 2) == 0){
				$('#intermedioA').append('<tr><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			} else {
				$('#intermedioA').append('<tr style="background-color:#CBCBCB"><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			}
		} else if (iter < 15) {
			if (Math.floor(iter % 2) == 0){
				$('#intermedioB').append('<tr><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			} else {
				$('#intermedioB').append('<tr style="background-color:#CBCBCB"><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			}
		} else if (iter == 15) {
			$('#intermedioB').append('<tr><td style="background-color:#CBCBCB" align="center" colspan="9">El Tanque Sisley no participa</tr>');
		}
		iter++;
	});
}

if (!segunda){
	// Loading Tabla Anual tables
	iter = 0;
	$(entry).each(function(){
		if (iter < 15){
			if (Math.floor(iter % 2) == 0){
				$('#anual').append('<tr><td>'+this.gsx$equipoan.$t+'</td><td align="center">'+this.gsx$pjan.$t+'</td><td align="center">'+this.gsx$pgan.$t+'</td><td align="center">'+this.gsx$pean.$t+'</td><td align="center">'+this.gsx$ppan.$t+'</td><td align="center">'+this.gsx$gfan.$t+'</td><td align="center">'+this.gsx$gcan.$t+'</td><td align="center">'+this.gsx$dgan.$t+'</td><td align="center">'+this.gsx$ptsan.$t+'</td></tr>');
			} else {
				$('#anual').append('<tr style="background-color:#CBCBCB"><td>'+this.gsx$equipoan.$t+'</td><td align="center">'+this.gsx$pjan.$t+'</td><td align="center">'+this.gsx$pgan.$t+'</td><td align="center">'+this.gsx$pean.$t+'</td><td align="center">'+this.gsx$ppan.$t+'</td><td align="center">'+this.gsx$gfan.$t+'</td><td align="center">'+this.gsx$gcan.$t+'</td><td align="center">'+this.gsx$dgan.$t+'</td><td align="center">'+this.gsx$ptsan.$t+'</td></tr>');
			}
		}
		iter++;
	});

	// Loading Tabla del Descenso tables
	iter = 0;
	$(entry).each(function(){
		if ($.inArray(this.title.$t,["Row: 16", "Row: 15"])>= 0){
			$('#descenso').append('</td><tr style="background-color: #e29453"><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$gfde.$t+'</td><td align="center">'+this.gsx$gcde.$t+'</td><td align="center">'+this.gsx$savg.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
		} else if (iter < 15) {
			if ((iter == 0) || (Math.floor(iter%2) == 0)) {
				$('#descenso').append('</td><tr><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$gfde.$t+'</td><td align="center">'+this.gsx$gcde.$t+'</td><td align="center">'+this.gsx$savg.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
			} else {
		    	$('#descenso').append('</td><tr style="background-color:#CBCBCB"><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$gfde.$t+'</td><td align="center">'+this.gsx$gcde.$t+'</td><td align="center">'+this.gsx$savg.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
			}
		}
		iter++;
	});
} else {
	// Loading Tabla de Segunda División tables
	iter = 0;
	$(entry).each(function(){
		if ($.inArray(this.title.$t,["Row: 4", "Row: 3", torneo])>= 0){
			$('#segunda').append('<tr style="background-color: #32CD32"><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
		} else if (iter < 14) {
			if ((iter == 0) || (Math.floor(iter%2) == 0)) {
				$('#segunda').append('<tr><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			} else {
				$('#segunda').append('<tr style="background-color: #CBCBCB"><td>'+this.gsx$equipo.$t+'</td><td align="center">'+this.gsx$pj.$t+'</td><td align="center">'+this.gsx$pg.$t+'</td><td align="center">'+this.gsx$pe.$t+'</td><td align="center">'+this.gsx$pp.$t+'</td><td align="center">'+this.gsx$gf.$t+'</td><td align="center">'+this.gsx$gc.$t+'</td><td align="center">'+this.gsx$dg.$t+'</td><td align="center">'+this.gsx$pts.$t+'</td></tr>');
			}
		}
		iter++;
	});

	// Loading Tabla del Descenso de Segunda División tables
	iter = 0;
	$(entry).each(function(){
		if ($.inArray(this.title.$t,["Row: 15", "Row: 14"])>= 0){
			$('#descenso').append('</td><tr style="background-color: #e29453"><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$pt17.$t+'</td><td align="center">'+this.gsx$pt18.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
		} else if (iter < 14) {
			if ((iter == 0) || (Math.floor(iter%2) == 0)) {
				$('#descenso').append('</td><tr><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$pt17.$t+'</td><td align="center">'+this.gsx$pt18.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
			} else {
		    	$('#descenso').append('</td><tr style="background-color:#CBCBCB"><td>'+this.gsx$equipo2.$t+'</td><td align="center">'+this.gsx$pj2.$t+'</td><td align="center">'+this.gsx$pt17.$t+'</td><td align="center">'+this.gsx$pt18.$t+'</td><td align="center">'+this.gsx$pts2.$t+'</td><td align="center">'+this.gsx$avg.$t+'</td></tr>');
			}
		}
		iter++;
	});
}