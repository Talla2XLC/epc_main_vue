<template>
  <table
    class="epc-table"
    :class="{
      'text-body4': $mq === 'xl' || $mq === 'l',
      'text-body6': $mq === 'm',
      'text-body7': $mq === 's'
    }"
  >
    <tr
      v-for="(row, rowIndex) in table"
      :key="rowIndex"
      class="epc-table-row"
      :class="{
        'header-row': rowIndex === 0,
        'text-caption2':
          rowIndex === 0 && ($mq === 'xl' || $mq === 'l' || $mq === 'm'),
        'text-caption3': rowIndex === 0 && $mq === 's'
      }"
    >
      <td
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="epc-table-cell"
        :class="{
          'section-name-cell': row.length === 1,
          'article-cell': row.length === maxCellQty && cellIndex === 0,
          'description-cell': row.length === maxCellQty && cellIndex === 1,
          'price-cell': row.length === maxCellQty && cellIndex === 2
        }"
        :colspan="row.length === 1 ? maxCellQty : false"
      >
        <div class="epc-table-cell-content" v-html="prepareCellText(cell, cellIndex, row, rowIndex)" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["table"],
  computed: {
    maxCellQty() {
      let maxValue = 0;
      this.table.forEach(row => {
        if (row.length > maxValue) {
          maxValue = row.length;
        }
      });
      return maxValue;
    }
  },
  methods: {
    prepareCellText(cell, cellID, row, rowIndex) {
      if (row.length === 1) {
        return cell.toUpperCase();
      } else if (rowIndex === 0 && cellID === 2) {
        if (this.$mq === "xl" || this.$mq === "l") {
          return "Цена за ед., руб. с НДС";
        } else {
          return "Цена,<br>руб. с НДС";
        }
      } else if (cellID === 2 && typeof cell === "number") {
        return cell.toFixed(2);
      } else {
        return cell;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.epc-table
  width: 100%
  border: 6px solid #940000
  @include respond-to(s)
    border: 2px solid #940000

.epc-table-row

.epc-table-cell
  vertical-align: middle
  border: 2px solid #DAD7D7
  @include respond-to(s)
    border: 1px solid #DAD7D7
  &-content
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    min-height: 50px
    @include respond-to(m)
      min-height: 48px
    @include respond-to(s)
      min-height: 40px

.section-name-cell
  font-size: 26px
  line-height: 42px
  background: #DAD7D7
  @include respond-to(s)
    font-size: 16px
    line-height: 24px
  @include respond-to(m)
    font-size: 20px
    line-height: 28px
  >div
    @include respond-to(s)
      min-height: 32px

.article-cell
  @include respond-to(s)
    min-width: 70px
  @include respond-to(m)
    min-width: 92px
  @include respond-to(l)
    min-width: 184px
  @include respond-to(xl)
    min-width: 264px

.price-cell
  @include respond-to(s)
    min-width: 58px
  @include respond-to(m)
    min-width: 92px
  @include respond-to(l)
    min-width: 289px
  @include respond-to(xl)
    min-width: 409px
</style>
