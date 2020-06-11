export default {
    getStorageItem(key) {
        const item = sessionStorage.getItem(key);
        if(key === 'data'){
            return item === null? [] : JSON.parse(item)
        }else{
            return item === null? '' : JSON.parse(item)
        }
    },
    setStorageItem(key, item) {
        if(item === null || item === undefined) return;
        sessionStorage.setItem(key, JSON.stringify(item));
    }
}