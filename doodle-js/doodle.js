const pv=document.getElementById("preview")
const pvtx=pv.getContext("2d")

pv.onclick=()=>{
    rungame()
}

const c=document.getElementById("game")
const ctx=c.getContext("2d",{alpha:false})

imagepath=""







setPreview("icon.png")

function setPreview(src){

    var a=getImage(src)

    a.onload=()=>{
        pvtx.clearRect(0,0,pv.width,pv.height)
        pvtx.drawImage(a,0,0,pv.width,pv.height)
    }
}

function rungame(){
    c.parentElement.hidden=false
    eval(gamecode)
}





function getImage(src){
    var im=new Image()
    im.src=imagepath+src
    return im
}

