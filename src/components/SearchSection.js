export default class SearchSection {

    $target = null
    $section = null
    recentKeyword = []
    onSearch = null
    onRandom = null

    constructor({$target, onSearch, onRandom}) {
        this.$target = $target
        this.onSearch = onSearch
        this.onRandom = onRandom

        const $section = document.createElement('section')
        $section.className = 'searching-section'
        this.$section = $section

        $target.appendChild($section)
        
        this.render()
    }

    setState(nextData){
        this.data = nextData
        this.render()
    }

    searchByKeyword(keyword){
        this.onSearch(keyword)
        this.deleteSearchInput()
    }

    deleteSearchInput(){
        const $searchInput = document.querySelector('.search-Input')
        $searchInput.value = ''
    }

    addRecentKeyword(keyword){
        this.recentKeyword
    }

    render(){
        this.$section.innerHTML = '';

        const $wrapper = document.createElement('div')
        $wrapper.className = 'search-box-wrapper'

        const $searchInput = document.createElement('input')
        $searchInput.className = 'search-Input'
        $searchInput.placeholder = '검색어를 입력해주세요.'

        $searchInput.addEventListener('keyup', (event)=>{
            if(event.keyCode === 13){
                this.searchByKeyword($searchInput.value)
            }
        })

        $wrapper.appendChild($searchInput)
        this.$section.appendChild($wrapper)
    }
}