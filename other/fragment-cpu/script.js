c=document.getElementsByTagName("canvas")[0]
ctx=c.getContext("2d",{alpha:false})

size=400

fragment=function(x,y){
    return [x/size*255,y/size*255,0]
}


function comp(){

    c.width=size
    c.height=size
    ctx=c.getContext("2d",{alpha:false})

    eval(`fragment=function(x,y){${
        document.getElementsByTagName("textarea")[0].value
    }}`)

    fast()

}

function slow(){

    for(var xx=0;xx<size;xx++){
        for(var yy=0;yy<size;yy++){
        
            var col=fragment(xx,yy)

            ctx.fillStyle=`rgb(${col[0]},${col[1]},${col[2]})`

            ctx.fillRect(xx,yy,1,1)

        }
    }

}

function fast(){

    for(var xx=0;xx<size;xx++){
        for(var yy=0;yy<size;yy++){

            var w=new Worker("worker.js")

            w.postMessage(xx,yy)
        
            w.onmessage=(e)=>{
                ctx.fillStyle=`rgb(${e.data[0]},${e.data[1]},${e.data[2]})`
                ctx.fillRect(xx,yy,1,1)
            }

        }
    }

}