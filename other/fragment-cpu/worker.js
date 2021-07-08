onmessage=(e)=>{
    
    var out=[]
    
    for(var i=0;i<e.data[1];i++){
    
        out.push(e.data[2](e.data[0],i))
    
    }
    
    postMessage(out)
}
