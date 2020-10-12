<template>
  <div class="wrapper">
    <DropDown :inputArray="arraySalesOption"
    :selectedValue="selectedSalesAnalyticsFilter"
    :onSelect="onSelectDropDown"/>
    <ChartWrapper :chartFilter="selectedSalesAnalyticsFilter"
    :key="selectedSalesAnalyticsFilter"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import salesApiResponse from '../../constants/apiResponse';
import DropDown from '../../components/drop-down.vue';
import ChartWrapper from '../../components/sales-chart.vue';

export default {
  name: 'StoreAnalytics',
  props: {
    msg: String,
  },
  components: {
    DropDown,
    ChartWrapper,
  },
  data() {
    return {
      // array to store data for drop down select
      arraySalesOption: [
        {
          text: 'overall sales',
          value: 'sales',
        },
        {
          text: 'overall orders',
          value: 'orders',
        },
        {
          text: 'page views',
          value: 'pageViews',
        },
        {
          text: 'page rec clickthru rate',
          value: 'clickThruRate',
        },
      ],
      // variable to store json data
      salesDataobject: null,
      // variable to store selected drop down value
      selectedSalesAnalyticsFilter: 'sales',
    };
  },
  methods: {
    // actions mapped to store
    ...mapActions([
      'sales/setSalesData',
    ]),
    // method to initialise store data
    initialiseStoreData(payLoad = null) {
      this['sales/setSalesData'](payLoad);
    },
    // method to call change in drop down select value
    onSelectDropDown(val) {
      this.selectedSalesAnalyticsFilter = val;
    },
  },
  beforeMount() {
    // method call to intitalise store data
    this.initialiseStoreData(salesApiResponse);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
