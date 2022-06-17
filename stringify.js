let btn = document.getElementById('submit')
btn.addEventListener('click',async ()=>{
    var text = document.getElementById("userText").value
    if(text.length==0){return}
    try{
        // extract custom settings from local chrome storage
        var storedSettings = await chrome.storage.local.get(['stringifySettingsObj'])
        var settings = storedSettings['stringifySettingsObj']
    }
    catch{var settings = undefined}
    if(settings!=undefined){
        text=stringify(text,settings)
    }
    else{
        text = stringify(text)
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
})

function stringify(text,{quote_char="'",delimiter_in="\n",delimiter_out="\n"}={}) {
    var res = text.split(delimiter_in).map((s) => { 
        return quote_char + s + quote_char + "," 
    })
    return res.join(delimiter_out).slice(0,-1)
}
