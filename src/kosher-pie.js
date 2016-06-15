ko.components.register("kosher-pie", {
  viewModel: function(params){

    self.percentage = params.percentage;

    self.size = params.size;

    self.r = ko.computed(function(){ return ko.unwrap(self.size) / 2 });
    self.c = ko.computed(function(){ return ko.unwrap(self.size) / 2 });

    self.b = ko.computed(function(){ return 2 * Math.PI * self.r() });

    self.a = ko.computed(function(){ return self.b() * (ko.unwrap(self.percentage) * .01) });


    self.strokeWidth = ko.computed(function(){return ko.unwrap(self.size) });
  },
  template: {element: 'kosher-pie-template'}
});
