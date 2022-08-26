import { ref } from 'vue';

// //state - reactive state
// export const counterStore = ref(0)

// //actions
// export const onIncrement = () => counterStore.value++
const store = {
    state: {
        counterStore: ref(0)
    },
    actions: {
        onIncrement() {
            //console.log(store.state.counterStore.value)
            store.state.counterStore.value++
        }
    }
}

export default store;