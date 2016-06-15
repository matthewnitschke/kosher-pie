ko.components.register("kosher-pie", {
  viewModel: function(params){

    var defaults = {
      color1: "#ddd",
      color2: "#0074d9"
    }

    var options = extend(defaults, params);


    self.slices = observifyArray(options.slices);
    self.size = observify(options.size);

    self.slicesSum = ko.computed(function(){
      var sum = 0;
      for(var i = 0; i <self.slices().length; i ++){
        sum += parseInt(self.slices()[i]());
      }
      return sum;
    });


    self.r = ko.computed(function(){ return self.size() / 2 });
    self.strokeWidth = ko.computed(function(){ return self.size() });

    self.b = ko.computed(function(){ return 2 * Math.PI * self.r() });
    self.a = ko.computed(function(){
      return (self.b() * self.slices()[1]()) / self.slicesSum();
    });



    self.fill = options.color1;
    self.stroke = options.color2;


    function extend(a, b) {
         for (var key in b){
             if (b.hasOwnProperty(key)){
                   a[key] = b[key];
             }
        }
         return a;
     }

     function observifyArray(arr){
       for(var i = 0; i < ko.unwrap(arr).length; i ++){
         ko.unwrap(arr)[i] = observify(ko.unwrap(arr)[i]);
       }
       if (ko.isObservable(arr) && 'push' in arr){
         return arr;
       } else {
         return ko.observableArray(arr);
       }
     }

     function observify(value){
       if (ko.isObservable(value)){
         return value;
       } else {
         return ko.observable(value);
       }
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
