export default class darkMode {
    STORAGE_KEY = 'user-color-scheme';
    COLOR_MODE_KEY = '--color-mode';
    $target = null

    constructor({ $target }){
        this.$target = $target

        this.render();
    }

    getCSSCustomProp = (propKey) => {
        let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);
    
        // Tidy up the string if there’s something to work with
        if (response.length) {
            response = response.replace(/\'|"/g, '').trim();
        }
    
        // Return the string response by default
        return response;
    };
    
    applySetting = passedSetting => {
        let currentSetting = passedSetting || sessionStorage.getItem(this.STORAGE_KEY);
    
        if(currentSetting) {
            document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
            this.setBtnText(currentSetting)
        }else{
            this.setBtnText(this.getCSSCustomProp(COLOR_MODE_KEY))
        }
    };
    
    toggleSetting = () => {
        let currentSetting = sessionStorage.getItem(this.STORAGE_KEY);
    
        switch(currentSetting) {
        case null:
            currentSetting = this.getCSSCustomProp(this.COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
            break;
        case 'light':
            currentSetting = 'dark';
            break;
        case 'dark':
            currentSetting = 'light';
            break;
        }
    
        sessionStorage.setItem(this.STORAGE_KEY, currentSetting);
    
        return currentSetting;
    };

    setBtnText = currentSetting => { 
        const $btn = document.querySelector('.darkMode-btn')
        $btn.innerText = currentSetting;
    };
    
    render(){
        // darkMode toggle 생성
        const $btnDiv = document.createElement('div')
        $btnDiv.className = 'darkMode'
        
        const $btn = document.createElement('button')
        $btn.className = 'darkMode-btn'
        $btn.addEventListener('click', event => {
            event.preventDefault();
        
            this.applySetting(this.toggleSetting());
        });

        $btnDiv.appendChild($btn)
        this.$target.appendChild($btnDiv)
        
        this.applySetting();
    }
}