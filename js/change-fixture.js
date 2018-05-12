// ID of the Google Spreadsheet
var spreadsheetID = {
		'primera':   "1EiRUYeVJDMstNGVABFXAqARRmwBbtlEkdQ5M0WWtJgE",
		'segunda':   "1WpbU0TWSl_-UUJ_OsLywnadnq2UG2DRC8Te-Xnd3DX4",
		'segundab':  "1Npyx-thhvP7hFNcBCqLzHvUS4IpVb61pAL_sNU8CuYg",
		'femeninoa': "1MvXQbIuk_hGiY1m3Dx-ANRhBRaUzg-QCu1nlzPTEeBs",
		'femeninob': "1pue2yltn5w0Sw1OrWwhtEidDTJWKAsVoYsuT0Z_m3Yw"
	};
// Make sure it is public or set to Anyone with link can view 
var torneo = "";

function clicketyClick(name){
	var divWidth = document.getElementById(name).outerWidth;
	var divHeight = document.getElementById(name).outerHeight;
	var anchor = document.getElementById(name+'-a-ctx');
	html2canvas(document.getElementById(name), {
		onrendered: function(canvas){
			document.body.appendChild(canvas);
			canvas.style.display = 'none';
			canvas.id = name+'-ctx';
			var ctx = document.getElementById(name+'-ctx');
			var img = ctx.toDataURL("image/png");
			anchor.href = ctx.toDataURL("image/png");
			anchor.download = name+'.png';
			anchor.click();
		},
		width: divWidth,
		height: divHeight,
	});
};

function renderFixture(week, head="Torneo"){
	let limit = 16;
	if (torneo = "Intermedio"){
		limit = 8;
	}
	if ((week>0) && (week<limit)){
		let iter = 0;
		$(entry).each(function() {
			if (iter == 0){
				$('#fixture-title').text("Torneo "+torneo+" - Fecha "+week);
				$('#fixture').text("");
			}
			if ((iter >= (week-1)*8) && (iter < (week)*8)) {
				if (iter == (week*8)-1) {
					$('#fixture').append('</td><tr><td  style="background-color:#CBCBCB" align="center" colspan="5">Fecha libre:</td></tr><tr style="background-color:#CBCBCB"><td align="center" colspan="5"><i>'+this.gsx$local.$t+'</i></td></tr>');
				}
	            else if (Math.floor(iter%2) == 0) {
					$('#fixture').append('</td><tr><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            }
			}
			iter++;
		});
		fecha = week;	
	}
}

function renderFixtureSegunda(week){
	if ((week>0) && (week<27)){
		let iter = 0;
		$(entry).each(function() {
			if (iter == 0){
				$('#fixture-title').text("Segunda División - Fecha "+week);
				$('#fixture').text("");
			}
			if ((iter >= (week-1)*7) && (iter < (week)*7)) {
				if (Math.floor((iter-((week-1)*7))%2) == 0) {
					$('#fixture').append('</td><tr><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            }
			}
			iter++;
		});
		fecha = week;	
	}
}

function renderFixtureSegundaB(week){
	if ((week>0) && (week<16)){
		let iter = 0;
		$(entry).each(function() {
			if (iter == 0){
				$('#fixture-title').text("Segunda B Nacional - Fecha "+week);
				$('#fixture').text("");
			}
			if ((iter >= (week-1)*8) && (iter < (week)*8)) {
				if (Math.floor((iter-((week-1)*8))%2) == 0) {
					$('#fixture').append('</td><tr><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            }
			}
			iter++;
		});
		fecha = week;	
	}
}

function renderFixtureFemenino(week){
	if ((week>0) && (week<10)){
		let iter = 0;
		$(entry).each(function() {
			if (iter == 0){
				$('#fixture-title').text("Femenino - Divisional "+ divisionalFem + " - Fecha "+week);
				$('#fixture').text("");
			}
			if ((iter >= (week-1)*5) && (iter < (week)*5)) {
				if (Math.floor((iter-((week-1)*5))%2) == 0) {
					console.log(this,'</td><tr><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
					$('#fixture').append('</td><tr><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+this.gsx$local.$t+'</td><td align="center">'+this.gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+this.gsx$resv.$t+'</td><td align="center">'+this.gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+this.gsx$specs.$t+'</i></td></tr>');
	            }
			}
			iter++;
		});
		fecha = week;	
	}
}