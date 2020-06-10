import SearchSection from './components/SearchSection.js'
import ResultSection from './components/ResultSection.js';
import { api } from "./api/theAPI.js";

export default class App {

    $target = null
    
    constructor($target) {
        this.$target = $target

        const searchSection = new SearchSection({
            $target,
            onSearch: async keyword => {
                const response = await api.fetchCats(keyword)
                if(!response.isError){
                    searchSection.setState(response.data)
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

        const data = ['asdasdasdasd','asdasdasdasdasd','asvwvwvwv']
        const resultSection = new ResultSection({
            $target,
            data
        })
    }
}