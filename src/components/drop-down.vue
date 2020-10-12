<template>
  <div>
    <label>Please Select Chart Type : </label>
    <select class="drop-down-select" v-model="salesAnalyticsvalue"
       @change="onSelectDropDown($event)">
      <option v-for="salesObject in inputArray"
       :key="salesObject.value"
       :value="salesObject.value">
        {{salesObject.text}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'dropDown',
  props: {
    inputArray: Array,
    selectedValue: String,
    onSelect: Function,
  },
  data() {
    return {
      // variable to store selected value for sales analytics
      salesAnalyticsvalue: '',
    };
  },
  methods: {
    // method to call on select of any drop down
    onSelectDropDown(event) {
      this.onSelect(event.target.value);
    },
  },
  beforeMount() {
    // initialize drop down model with prop value
    this.salesAnalyticsvalue = this.selectedValue;
  },
};
</script>

<style scoped>
.drop-down-select {
  width: 250px;
  height: 25px;
  margin-left: 4px;
  font-size: 15px;
}
</style>
