<template>
  <div id="chartContainer">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'chartWrapper',
  props: {
    chartFilter: String,
  },
  computed: {
    ...mapGetters({
      currentSalesData: 'sales/getSalesData',
    }),
  },
  data() {
    return {
      // variable to store data object to initialise chart data
      chartDataObject: null,
      // variable to store data object to initialise chart options
      chartOptionsObject: null,
      // variable to initialise chart
      chartObject: null,
      // variable to set chart color
      chartColor: null,
      // variable to set yAxis and title string
      yAxisString: null,
    };
  },
  methods: {
    // method to draw chart
    drawSaleschart() {
      // method call to prepre chart data and options
      this.prepareDataForChart();
      this.chartObject = new window.google.visualization.LineChart(document.getElementById('chartContainer'));
      this.chartObject.draw(this.chartDataObject, this.chartOptionsObject);
    },
    // method to prepare data for chart
    prepareDataForChart() {
      // set y axis string and color of chart according to drop down filter value
      switch (this.chartFilter) {
        case 'sales':
          this.yAxisString = 'Sales';
          this.chartColor = '#0D47A1';
          break;
        case 'orders':
          this.yAxisString = 'Orders';
          this.chartColor = '#009688';
          break;
        case 'pageViews':
          this.yAxisString = 'Page Views';
          this.chartColor = '#4CAF50';
          break;
        case 'clickThruRate':
          this.yAxisString = 'Click Thru rate';
          this.chartColor = '#E65100';
          break;
        default:
          this.yAxisString = null;
          break;
      }
      this.chartDataObject = new window.google.visualization.DataTable();
      this.chartDataObject.addColumn('string', this.currentSalesData.xaxis);
      this.chartDataObject.addColumn('number', this.yAxisString);
      // Filter data for chart based on selected filter
      this.chartDataObject.addRows(
        this.currentSalesData.records.map(
          (salesObject) => [salesObject.date, salesObject[this.chartFilter]],
        ),
      );
      this.chartOptionsObject = {
        hAxis: {
          title: 'Date',
        },
        vAxis: {
          title: this.yAxisString,
        },
        colors: [this.chartColor],
        title: this.yAxisString,
        legend: {
          position: 'top',
          alignment: 'center',
        },
        pointShape: 'circle',
        pointSize: 6,
        animation: {
          duration: 600,
          easing: 'in',
          startup: true,
        },
        backgroundColor: '#F5F5F5',
      };
    },
  },
  mounted() {
    // method cal for loading goggle charts
    window.google.charts.load('current', {
      packages: ['corechart'],
    });
    window.google.charts.setOnLoadCallback(this.drawSaleschart);
  },
};
</script>

<style scoped>
#chartContainer {
  width: 100%;
  height: 550px;
  margin-top: 4px;
}
</style>
