import {ref, reactive, computed} from 'vue'

const state = reactive({
    count:16,
    doubleCount: computed(() => state.count * 2),
    increment: () => state.count++
})

const counterStore = () => {
    return state
}

export {counterStore}