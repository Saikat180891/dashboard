import * as d3 from "d3";

export const discretebarChartOptions = {
  chart: {
    type: "discreteBarChart",
    height: 450,
    width: 1100,
    margin: {
      top: 20,
      right: 20,
      bottom: 50,
      left: 55
    },
    x: function(d) {
      return d.label;
    },
    y: function(d) {
      return d.value;
    },
    showValues: true,
    valueFormat: function(d) {
      return d3.format(",.4f")(d);
    },
    duration: 500,
    xAxis: {
      axisLabel: "X Axis"
    },
    yAxis: {
      axisLabel: "Y Axis",
      axisLabelDistance: -10
    }
  }
};

export const data = [
  {
    key: "Cumulative Return",
    values: [
      { label: "Orders", value: randomize() },
      { label: "New Customers", value: randomize() },
      { label: "Existing Customers", value: randomize() },
      { label: " Orders Delivered", value: randomize() },
      { label: "Order Not delivered", value: randomize() },
      { label: "Orders cancelled by customer", value: randomize() }
    ]
  }
];

function randomize() {
  const maximum = 100;
  const minimum = 0;
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function generateData() {
  return [
    {
      key: "Cumulative Return",
      values: [
        { label: "Orders", value: randomize() },
        { label: "New Customers", value: randomize() },
        { label: "Existing Customers", value: randomize() },
        { label: " Orders Delivered", value: randomize() },
        { label: "Order Not delivered", value: randomize() },
        { label: "Orders cancelled by customer", value: randomize() }
      ]
    }
  ];
}
