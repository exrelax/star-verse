<template>
  <table class="asop-table">
    <thead class="asop-table__head">
      <tr>
        <th class="ship-name">Vehicle</th>
        <th class="ship-info">Info</th>
        <th class="ship-location">Location</th>
        <th class="ship-status">Status</th>
        <th class="ship-focus">Focus</th>
        <th class="ship-cargo">Cargo</th>
        <th class="ship-crew">Crew</th>
        <th class="ship-action">Actions</th>
      </tr>
    </thead>
    <tbody class="asop-table__body">
      <tr v-for="(ship, index) in shipsByCurrentViewAndLocation" :key="index">
        <td class="ship-name">
          <span class="ship-manufacturer">{{ ship.manufacturer }}</span> <span class="ship-model">{{ ship.name }}</span>
        </td>
        <td class="ship-info">
          {{ ship.info }}
        </td>
        <td class="ship-location">
          {{ ship.location }}
        </td>
        <td class="ship-status">
          {{ ship.status }}
        </td>
        <td class="ship-focus">
          {{ ship.focus }}
        </td>
        <td class="ship-cargo">
          {{ ship.cargo }}
        </td>
        <td class="ship-crew">
          {{ ship.crew }}
        </td>
        <td class="ship-action">
          <button class="ship-action-button">Action</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.asop-table {
  --cell-padding-horizontal: 20px;

  width: 100%;
  table-layout: fixed;
  border-spacing: 0px;

  .ship {
    &-name {
      width: 20%;
    }
    &-info {
      width: 14%;
    }
    &-location {
      width: 16%;
    }
    &-status {
      width: 14%;
    }
    &-focus {
      width: 12%;
    }
    &-cargo {
      width: 8%;
    }
    &-crew {
      width: 8%;
    }
    &-action {
      width: 8%;
    }
  }

  /*
  .ship {
    &-name {
      width: 255px;
    }
    &-info {
      width: 180px;
    }
    &-location {
      width: 205px;
    }
    &-status {
      width: 180px;
    }
    &-focus {
      width: 154px;
    }
    &-cargo {
      width: 102px;
    }
    &-crew {
      width: 102px;
    }
    &-action {
      width: 102px;
    }
  }
  */

  &__head {
    display: block;

    th {
      font-family: var(--font-futuristic);
      font-size: calc(18 / var(--body-font-size) * 100%);
      height: 32px;
      line-height: calc(32 / 18);
      padding: 0 var(--cell-padding-horizontal);
      text-align: center;
      color: var(--color-star-citizen-asop-yellow-medium);
      border: 2px solid var(--color-star-citizen-asop-yellow-light);
      border-left: 0;
      border-right: 0;
      overflow: hidden;

      &.ship-name {
        text-align: left;
      }
    }
  }

  &__body {
    display: block;
    overflow-y: scroll;
    height: 560px;
    background: var(--color-star-citizen-asop-yellow-medium);

    td {
      @include transition-standard;

      font-size: calc(18 / var(--body-font-size) * 100%);
      font-family: var(--font-display);
      height: 100px;
      padding: 0 var(--cell-padding-horizontal);
      text-align: center;
      color: var(--color-black-90-rgb);
      background: var(--color-star-citizen-asop-yellow-medium);
      border: 0;
      transition-property: color, background;

      &.ship-name {
        text-align: left;
      }
    }

    tr:hover {
      td {
        color: var(--color-white-90-rgb);
        background: var(--color-black-rgb);
      }
    }
  }
}
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { defineProps, computed } from 'vue'
import { useAsopStore } from '@/stores/asop'

const asop = useAsopStore()

const { shipsByCurrentViewAndLocation } = storeToRefs(asop)
</script>