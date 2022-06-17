var map = {
    doublequote: '"',
    quote:"'",
    linefeed:"\n",
    tab:"\t",
    space:" "
}

let btn = document.getElementById('saveSettings')
btn.addEventListener('click', () => {
    let res = {}
    Array.from(document.getElementsByTagName("input")).forEach((e)=>{
        if(e.checked){
            res[e.name] = map[e.value]
        }
    })
    console.log(res)
    chrome.storage.local.set({"stringifySettingsObj":res})
})
