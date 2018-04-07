// ID of the Google Spreadsheet
var spreadsheetID = {
		'primera':  "1EiRUYeVJDMstNGVABFXAqARRmwBbtlEkdQ5M0WWtJgE",
		'segunda':  "1WpbU0TWSl_-UUJ_OsLywnadnq2UG2DRC8Te-Xnd3DX4",
		'segundab': "1tXHJ_p2dIIIkytbmCadpP_ABdnyuN0mADAxRlrtoqeM"
	};
// Make sure it is public or set to Anyone with link can view 
var url = "";

function renderFixture(week, head="Torneo"){
	if ((week>0) && (week<16)){
		$.getJSON(url, function(data) {
			let entry = data.feed.entry;
			$('#fixture-title').text("Torneo "+entry[0].gsx$torneo.$t+" - Fecha "+week);
			$('#fixture').text("");
			for(let i=0; i<8; i++) {
				if (i == 7) {
					$('#fixture').append('</td><tr><td  style="background-color:#CBCBCB" align="center" colspan="5">Fecha libre:</td></tr><tr style="background-color:#CBCBCB"><td align="center" colspan="5"><i>'+entry[(week-1)*8+i].gsx$local.$t+'</i></td></tr>');
				}
	            else if (Math.floor(i%2) == 0) {
					$('#fixture').append('</td><tr><td align="center">'+entry[(week-1)*8+i].gsx$local.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+entry[(week-1)*8+i].gsx$resv.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+entry[(week-1)*8+i].gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+entry[(week-1)*8+i].gsx$local.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+entry[(week-1)*8+i].gsx$resv.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+entry[(week-1)*8+i].gsx$specs.$t+'</i></td></tr>');
	            }
			}
		});
		fecha = week;	
	}
}

function renderFixtureSegunda(week){
	if ((week>0) && (week<27)){
		$.getJSON(url, function(data) {
			let entry = data.feed.entry;
			$('#fixture-title').text("Segunda División - Fecha "+week);
			$('#fixture').text("");
			for(let i=0; i<8; i++) {
				if (Math.floor(i%2) == 0) {
					$('#fixture').append('</td><tr><td align="center">'+entry[(week-1)*8+i].gsx$local.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+entry[(week-1)*8+i].gsx$resv.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$visita.$t+'</td></tr><tr><td align="center" colspan="5"><i>'+entry[(week-1)*8+i].gsx$specs.$t+'</i></td></tr>');
	            } else {
					$('#fixture').append('</td><tr style="background-color:#CBCBCB"><td align="center">'+entry[(week-1)*8+i].gsx$local.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$resl.$t+'</td><td align="center">-</td><td align="center">'+entry[(week-1)*8+i].gsx$resv.$t+'</td><td align="center">'+entry[(week-1)*8+i].gsx$visita.$t+'</td></tr><tr><td style="background-color:#CBCBCB" align="center" colspan="5"><i>'+entry[(week-1)*8+i].gsx$specs.$t+'</i></td></tr>');
	            }
			}
		});
		fecha = week;	
	}
}