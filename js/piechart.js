anychart.onDocumentReady(function() {

  var input = {"house_destroyed": 0.6110041210785583,
    "positions": {"000876:CH": 0.0005189412300106426, "NASDAQ: PEP": 2.378529025164321e-05, "NYSE: AEP": 0.0002753623677410394, "NYSE: BLBD": 0.008992328093438437, "NYSE: BPL": 0.001975759401217474, "NYSE: BUD": 6.849255515971107e-05, "NYSE: CPK": 0.01917401175080699, "NYSE: CQB": 0.01777489481281008, "NYSE: CVA": 0.006964305637551167, "NYSE: DUK": 0.12511138181666048, "NYSE: LMS": 0.056128724916500505, "NYSE: MOS": 0.031784668920892316, "NYSE: NEE": 0.14571963348204406, "NYSE: NRG": 0.04211130156242647, "NYSE: POT": 0.015256932763063821, "NYSE: RYAM": 0.055253553126912255, "NYSE: SO": 0.04131954832866638, "NYSE: WRK": 0.0012907888331796574, "TSX: EMA": 0.4302555851106668}
  }
  var data = []
  console.log(input['house_destroyed'])

  for(var i in input['positions']){
     var key = i;
     var val = input['positions'][i];
     data.push({x: key, value: val}) // add data
 }
 var chart = anychart.pie();

 chart.title("Breakdown of portfolio for your house"); // set the chart title
 chart.data(data); // add the data
 chart.container('container'); // display the chart in the container

 chart.legend().position("right"); // set legend position
 chart.legend().itemsLayout("vertical"); // set items layout
 chart.sort("desc"); // sort items
 chart.palette(anychart.palettes.pastel); // pastel like Andrew's closet
 chart.draw();
});
