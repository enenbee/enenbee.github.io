// last updated: MM/DD/YYYY  07/02/2021


/********************/
//collision - collision.js
/********************/


function lines(x1,y1,x2,y2,x3,y3,x4,y4){
    
    var uA=((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))
    var uB=((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1))

    return (uA>=0&&uA<=1)&&(uB>=0&&uB<=1)

}

function boxes([x1,y1,w1,h1],[x2,y2,w2,h2]){
    return x1<x2+w2&&
            x1+w1>x2&&
            y1<y2+h2&&
            y1+h1>y2
}

function pointBox(px,py,[x,y,w,h]){
    return x<=px&&px<=x+w&&
            y<=py&&py<=y+h
}

function lineBox(x1,y1,x2,y2,[x,y,w,h]){

    return lines(x1,y1,x2,y2,  x,y,x,y+h)||
    lines(x1,y1,x2,y2,  x+w,y,x+w,y+h)||
    lines(x1,y1,x2,y2,  x,y,x+w,y)||
    lines(x1,y1,x2,y2,  x,y+h,x+w,y+h+h)

}


/********************/
//controller - controller.js
/********************/


controlon=[false,false,false,false]

window.addEventListener("gamepadconnected", function(e) {
    controlon[e.gamepad.index]=true
})
window.addEventListener("gamepaddisconnected", function(e) {
    controlon[e.gamepad.index]=false
})

function getGamepad(id){
    if(controlon[id]){
        return navigator.getGamepads()[id]
    } else {
        return null
    }
}


/********************/
//main - script.js
/********************/


const b=document.body
const c=document.getElementById("canv")
const ctx=c.getContext("2d",{alpha:false})
r=c.getBoundingClientRect()


mdown=false
mx=0
my=0

b.onmousemove=(e)=>{
    r=c.getBoundingClientRect()
    mx=e.x-r.x,
    my=e.y-r.y
}

b.onmousedown=()=>{mdown=true}
b.onmouseup=()=>{mdown=false}

keys={}

b.onkeydown=(e)=>{
    keys[e.key]=true
}
b.onkeyup=(e)=>{
    keys[e.key]=false
}


function rungame(i){

    document.getElementById("load").hidden=true

    var file=i.files[0]

    var read=new FileReader()

    read.readAsText(file)

    read.onload=()=>{
        var code=read.result

        eval(code)

        _frame=0
        var li=load.length
        for(var _i=0;_i<li;_i++){
            load[_i]()
        }
    }
}

_frame=0

setInterval(()=>{
    _frame++
    var fi=frame.length
    for(var _i=0;_i<fi;_i++){
        ctx.resetTransform()
        ctx.translate(-_camera[0],-_camera[1])
        frame[_i](_frame)
    }
},50/3)

// functions for me

function _setfont(){
    ctx.font=`${font_size}px ${font_family}`
}


//commands to help you :)

load=[]
frame=[]

function addLoad(func){//load is useful for loading graphics
    load.push(func)
}

function addFrame(func){//frame is useful for drawing graphics
    frame.push(func)
}

loadedpercent=[0,0]

imagepath=""

function getImage(src){
    loadedpercent[1]++
    var i = new Image()
    i.src = `${imagepath}${src}.png`
    i.onload=()=>{loadedpercent[0]++}
    return i
}



font_family="sans-serif"
font_size="10"

function set_fontfamily(inn){
    font_family=inn
    _setfont()
}
function set_fontsize(inn){
    font_size=inn
    _setfont()
}

//controls

function key(code){
    if(keys[code]==undefined){
        return false
    } else {
        return keys[code]
    }
}

function getMouse(){
    return {x:mx,y:my,down:mdown}
}

//gamepad

function gp_connected(gp){
    return getGamepad(gp)!=null
}

function gp_axes(gp,axis){
    var g=getGamepad(gp)
    if(g==null) return 0
    return g.axes[axis]
}

function gp_button(gp,btn){
    var g=getGamepad(gp)
    if(g==null) return false
    return g.buttons[btn].pressed
}

function gp_vibrate(gp,dur,strong,weak){
    getGamepad(gp).vibrationActuator.playEffect("dual-rumble",{duration:dur,strongMagnitude:strong,weakMagnitude:weak})
}

function deadzone(value,deadzone){
    return Math.abs(value)<deadzone?0:value
}

//drawing

function d_clear(color){
    var tmp=ctx.getTransform()

    ctx.resetTransform()

    ctx.fillStyle=color
    ctx.fillRect(0,0,c.width,c.height)

    ctx.setTransform(tmp)
}

function d_text(text,x,y,color){
    if(color!=undefined) ctx.fillStyle=color
    ctx.fillText(text,x,y+(font_size/1))
}

function d_rect(x,y,w,h,color){
    if(color!=undefined) ctx.fillStyle=color
    ctx.fillRect(x,y,w,h)
}

function d_line(x1,y1,x2,y2,color){
    if(color!=undefined) ctx.strokeStyle=color
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}

function d_image(img,x,y,w,h){
    if(w==undefined){
        ctx.drawImage(img,x,y)
    } else {
        ctx.drawImage(img,x,y,w,h)
    }
}

function d_rotimage(img,x,y,rot,px,py){
    var tmp=ctx.getTransform()

    ctx.translate(x,y)
    ctx.rotate(rot)
    ctx.drawImage(img,-px,-py)

    ctx.setTransform(tmp)
}

//math

function m_radians(degrees){
    return degrees*Math.PI/180
}
function m_degrees(radians){
    return radians*180/Math.PI
}

function m_dist(x,y){
    return Math.sqrt(x*x+y*y)
}

function m_norm(x,y){
    var d=m_dist(x,y)
    return d==0?[0,0]:[x/d,y/d]
}


//camera

_camera=[0,0]
function movecamera(x,y){
    _camera[0]+=x
    _camera[1]+=y
}
function setcamera(x,y){
    _camera=[x-c.width/2,y-c.height/2]
}
function dragcamera(x,y,div){
    var cm=[_camera[0]+c.width/2,_camera[1]+c.height/2]
    var dst=[x-cm[0],y-cm[1]]
    cm=[cm[0]+(dst[0]/div),cm[1]+(dst[1]/div)]
    _camera=[cm[0]-c.width/2,cm[1]-c.height/2]
}

function dragcameracenter(div){
    var dst=[-_camera[0],-_camera[1]]
    _camera=[_camera[0]+(dst[0]/div),_camera[1]+(dst[1]/div)]
}

//other

function playAudio(src){

    /*

    to load and play audio at different times
    use new Audio([src])
    and
    [variable].play()

    */

    var a=new Audio(src)
    a.oncanplay=()=>{a.play()}
}
