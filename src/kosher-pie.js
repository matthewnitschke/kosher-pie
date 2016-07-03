function Circle(data){
  var self = this;

  self.color = data.color;
  self.percent = data.percent;
  self.offset = data.offset;
}

ko.components.register('kosher-pie', {
  viewModel: function(params){

    var data = params.data;
    var colors = params.colors

    self.circles = ko.observableArray();

    self.backgroundColor = ko.computed(function(){
      if (self.circles().length > 0){
        return self.circles()[self.circles().length-1].color;
      } else {
        return "#FFF";
      }
    });

    var sumOfData = ko.computed(function(){
      var total = 0;

      ko.unwrap(data).forEach(function(item){
        total+=item;
      });

      return total;
    });

    var offset = 0;
    for (var i = 0; i < data.length; i ++){
      var perc = getCorrectedPerc(data[i], sumOfData());

      self.circles.push(new Circle({
        color: colors[i],
        percent: perc,
        offset: offset
      }));

      offset += perc;
    }


    function getCorrectedPerc(val, sum){
      return (val * 100) / sum;
    }
  },
  template: '<svg viewBox="0 0 32 32" data-bind="foreach: circles, attr: {style: \'background-color: \' + backgroundColor()}">\
			<circle r="16" cx="16" cy="16" data-bind="attr: { stroke: color, \'stroke-dasharray\': percent + \' 100\', \'stroke-dashoffset\': \'-\' + offset }"></circle>\
		</svg>'
})
