import { ref, onMounted } from 'vue'

export function useFetch(url) {
    //state variables
    const data = ref(null)
    const error = ref(null)
    //function api
    async function fetchData() {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(output => {
        //         data.value = output
        //     })
        //     .catch(err => {
        //         error.value = err
        //     })
        try {
            // const output = await (await fetch(url)).json()
            //  const output = await res.json()
            data.value = await (await fetch(url)).json()
        }
        catch (err) {
            error.value = err
        }
    }

    onMounted(() => {
        //call fetch api
        fetchData();
    })
    //return 
    return {
        data,
        error
    }

}