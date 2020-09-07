const check= document.getElementById('checkbox');
check.addEventListener('change',e =>{
    if(e.target.checked){
        document.documentElement.setAttribute('theme','dark-theme');
    }else{
        document.documentElement.setAttribute('theme','light-theme');
    }
})