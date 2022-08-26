//defineStore method defines the store 
import { defineStore } from "pinia";

const counterStore = defineStore('counter', {
  //state
  state: () => {
    //return inital state
    return {
      count: 10
    }
  },
  //actions
  actions: {
    increment() {
      this.count++
    }
  },
  //getters (computed Properties)
  getters: {
    doubleIt: state => state.count * 2
  }
})

export default counterStore