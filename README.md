# ko-pi-chart
A knockout js pi chart component

# Installation
```html
<script src='/path/to/knockout.js'></script>
<script src='/path/to/ko-pi-chart.js'></script>
```

# Usage
Current parameters are size and percentage

Parameters can be constants
```html
<pi-chart params="size: 200, percentage: 50"></pi-chart>
```

or observables
```html
<pi-chart params="size: sizeOfChart, percentage: currentPercentage"></pi-chart>
```

Please see examples folder for working example
