onmessage=(e)=>{
    
    var out=[]
    
    for(var i=0;i<300;i++){
    
        out.push(fragment(e.data,i))
    
    }
    
    postMessage(out)
}
