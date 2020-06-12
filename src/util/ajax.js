
export default {
    ajax : (type, url) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status === 200){
                return xhr
            }else{
                return null
            }
        };
        
        xhr.open(type,url,true);
        xhr.send(null)
    }
}