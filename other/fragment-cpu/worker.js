onmessage=(e)=>{
    
    var fragment=e.data[2]
    
    var out=[]
    
    for(var i=0;i<e.data[1];i++){
    
        out.push(fragment(e.data[0],i))
    
    }
    
    postMessage(out)
}
