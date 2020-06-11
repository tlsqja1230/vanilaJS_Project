export default class Loading {
    loadWrap = null

    constructor({$target}) {
        this.loadWrap = document.createElement('div');
        this.loadWrap.className = 'loading-wrapper';
        this.loadWrap.classList.add('hidden');

        $target.appendChild(this.loadWrap);

        this.render();
    }

    toggleLoad() {
        const spinner = document.querySelector('.loading-wrapper');
        spinner.classList.toggle('hidden');
    }

    render() {
        const $h1 = document.createElement('h1');
        $h1.innerText = '로딩중입니다. 잠시만 기다려주세요.'

        this.loadWrap.appendChild($h1);
    }
}