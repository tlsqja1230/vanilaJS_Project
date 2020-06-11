import SearchSection from './components/SearchSection.js'
import ResultSection from './components/ResultSection.js';
import Loading from './components/Loading.js';
import DarkMode from "./components/DarkMode.js"

// util
import storage from "./util/sessionStorage.js"

// api
import { api } from "./api/theAPI.js";

export default class App {

    $target = null
    
    constructor($target) {
        this.$target = $target

        const searchSection = new SearchSection({
            $target,
            onSearch: async keyword => {
                loading.toggleLoad()
                const response = await api.fetchCats(keyword)
                if(!response.isError){
                    storage.setStorageItem('data', response.data)
                    searchSection.setState(response.data)
                    loading.toggleLoad()
                }else{
                    //Error.js 만들고 처리
                }
            },
            onRandomClick: async () => {
                const response = await api.fetchCats()
                if(!response.isError){
                    searchSection.setState(response.data)
                }else{
                    //Error.js 만들고 처리
                }
            },
        })

        // const resultSection = new ResultSection({
        //     $target,
        //     data
        // })

        const loading = new Loading({
            $target
        })

        const darkMode = new DarkMode({
            $target
        })
    }
}