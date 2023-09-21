import { defineStore } from 'pinia'

const counterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 16
    }),
    getters: {
        // doubleCount: function(state){
        //     return state.count * 2
        // }
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

export { counterStore }