ko.components.register("kosher-pie", {
  viewModel: function(params){

    var defaults = {
      color1: "#ddd",
      color2: "#0074d9"
    }

    var options = extend(defaults, params);

    self.percentage = options.percentage;
    self.size = options.size;

    self.r = ko.computed(function(){ return ko.unwrap(self.size) / 2 });
    self.b = ko.computed(function(){ return 2 * Math.PI * self.r() });
    self.a = ko.computed(function(){ return self.b() * (ko.unwrap(self.percentage) * .01) });


    self.strokeWidth = ko.computed(function(){return ko.unwrap(self.size) });
    self.fill = options.color1;
    self.stroke = options.color2;


    function extend(a, b) {
         for (var key in b)
             if (b.hasOwnProperty(key))
                 a[key] = b[key];
         return a;
     }
  },
  template: "<div class=\"kosher-pie__wrapper\">\
               <svg data-bind=\"attr: {width: ko.unwrap(size), height: ko.unwrap(size) }\" class=\"kosher-pie__\">\
                 <circle class=\"kosher-pie__\" data-bind=\"attr: {\
                   r: r(),\
                   cx: r(),\
                   cy: r(),\
                   style: 'stroke-dasharray: ' + a() + ' ' + b() +\
                          ';stroke-width: ' + strokeWidth() +\
                          ';fill: ' + ko.unwrap(fill) +\
                          ';stroke: ' + ko.unwrap(stroke)\
                 }\"></circle>\
               </svg>\
             </div>"
});
