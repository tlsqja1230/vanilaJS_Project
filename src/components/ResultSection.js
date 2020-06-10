export default class ResultSection {
    $target = null
    $section = null
    data = null

    constructor({$target, data}){
        this.$target = $target
        this.data = data
        const $section = document.createElement('section')
        $section.className = 'results-section'
        this.$section = $section
        
        $target.appendChild(this.$section)

        this.render()
    }

    setState(data){
        this.data = data
        this.render()
    }

    render(){
        if(!this.data) return;

        this.$section.innerHTML = '';

        if(this.data.length > 0){
            const $resultDiv = document.createElement('div')
            this.data.forEach(item=>{
                $resultDiv.innerHTML += item
            })
            this.$section.appendChild($resultDiv)
        }else{

        }

       
        
    }
}