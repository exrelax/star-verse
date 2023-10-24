import { defineStore } from 'pinia'

const initialState = {
  view: 'Deliverable',
  location: 'Everus Harbor',
  ships: [
    {
      id: 1,
      manufacturer: 'Aegis',
      name: 'Redeemer',
      info: 'Deliverable',
      location: 'Everus Harbor',
      status: 'stored',
      focus: 'Gunship',
      cargo: 2,
      crew: 4,
    },
    {
      id: 2,
      manufacturer: 'Anvil',
      name: 'Arrow',
      info: 'Deliverable',
      location: 'Everus Harbor',
      status: 'stored',
      focus: 'Light Fighter',
      cargo: 0,
      crew: 1,
    },
    {
      id: 3,
      manufacturer: 'Anvil',
      name: 'C8 Pisces',
      info: 'Deliverable',
      location: 'Everus Harbor',
      status: 'stored',
      focus: 'Pathfinder',
      cargo: 4,
      crew: 1,
    }
  ]
}

export const useAsopStore = defineStore({
  id: 'counter',
  state: () => (initialState),
  getters: {
    allShips: (state) => state.ships,
    shipById: (state) => {
      return (id) => state.ships.find(ship => ship.id === id)
    },
    shipsByLocation: (state) => {
      return (location) => state.ships.filter(ship => ship.location === location)
    },
    shipsByStatus: (state) => {
      return (status) => state.ships.filter(ship => ship.status === status)
    },
    shipsByManufacturer: (state) => {
      return (manufacturer) => state.ships.filter(ship => ship.manufacturer === manufacturer)
    },
    shipsByFocus: (state) => {
      return (focus) => state.ships.filter(ship => ship.focus === focus)
    },
    shipsByCrew: (state) => {
      return (crew) => state.ships.filter(ship => ship.crew === crew)
    },
    shipsByCargo: (state) => {
      return (cargo) => state.ships.filter(ship => ship.cargo === cargo)
    },
    shipsByInfo: (state) => {
      return (info) => state.ships.filter(ship => ship.info === info)
    },
    shipsByCurrentLocation: (state) => {
      return state.ships.filter(ship => ship.location === state.location)
    },
    shipsByCurrentView: (state) => {
      return state.ships.filter(ship => ship.info === state.view)
    },
    shipsByCurrentViewAndLocation: (state) => {
      return state.ships.filter(ship => ship.info === state.view && ship.location === state.location)
    }
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
