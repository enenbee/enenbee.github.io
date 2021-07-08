onmessage=(e)=>{
    
    size=e.data[1]
    
    eval(e.data[2])
    
    var out=[e.data[0]]
    
    for(var i=0;i<size;i++){
    
        out.push(fragment(e.data[0],i))
    
    }
    
    postMessage(out)
}
