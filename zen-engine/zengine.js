
ratio=[1920,1080]// width and height of canvas


/********************/
//collision
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
//controller
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
//main
/********************/


const b=document.body
c=document.createElement("canvas")
ctx=c.getContext("2d",{alpha:false})

function setCanvas(dom){
    c=dom
    ctx=c.getContext("2d",{alpha:false})
}


mdown=[false,false,false,false,false] //Mouse keys:   left,middle,right,browser back,browser forward
mx=0
my=0

b.onmousemove=(e)=>{
    r=c.getBoundingClientRect()
    var scale=r.width/c.width
    mx=(e.x-r.x)/scale,
    my=(e.y-r.y)/scale
}

b.onmousedown=(e)=>{mdown[e.button]=true}
b.onmouseup=(e)=>{mdown[e.button]=false}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

changed={}
keys={}
keycodes={}

keynames=[
    null,null,null,null,null,null,null,null,
    "Backspace","Tab",null,null,"Clear","Enter",null,null,"Shift","Control","Alt","Pause","CapsLock",
    null,null,null,null,null,null,"Esc",
    null,null,null,null,null,"PageUp","PageDown","End","Home",
"ArrowLeft","ArrowUp","ArrowRight","ArrowDown",null,null,null,null,"Insert","Delete",null,")","!","@","#","$","%","^","&","*","(",
null,null,null,null,null,null,null,
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"MetaLeft","MetaRight","Select",
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
"F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12",
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
"NumLock","ScrollLock"
]

keymode="old"//set it to new to use e.keyCode instead of e.key

b.onkeydown=(e)=>{
    
    if(keymode=="new"){
        var key=keynames[e.keyCode]
    } else {
        var key=e.key
    }
    
    changed[key]=true
    keys[key]=true
}
b.onkeyup=(e)=>{
    
    if(keymode=="new"){
        var key=keynames[e.keyCode]
    } else {
        var key=e.key
    }
    
    changed[key]=true
    keys[key]=false
    
}

_detail=1





function _setfont(){
    ctx.font=`${font_size}px ${font_family}`
}


//commands

function Frame(){}//add your own Frame function to change this

loadedpercent=[0,0]

imagepath=""

function img(src){
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

function changedkey(code){
    if(changed[code]==undefined){
        return false
    } else {
        return changed[code]
    }
}

function justpressed(code){
    return key(code)&&changedkey(code)
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

clearcolor="#000"

function d_clear(color,attt){
    /*
    Attributes:
    color - color
    ctx - Canvas context
    */

    var att=attt||{}

    var cctx=(att.ctx||ctx)

    var tmp=cctx.getTransform()


    cctx.resetTransform()

    cctx.fillStyle=color
    cctx.fillRect(0,0,(cctx.canvas||c).width,(cctx.canvas||c).height)

    cctx.setTransform(tmp)
}

function d_text(text,x,y,attt){
    /*
    Attributes:
    color - color
    ctx - Canvas context
    */

    var att=attt||{}

    var cctx=(att.ctx||ctx)

    cctx.fillStyle=att.color||"#FFF"
    cctx.fillText(text,x,y+(font_size/1))
}

function d_rect(x,y,w,h,color,attt){
    /*
    Attributes:
    ctx - Canvas context
    */
    
    var att=attt||{}

    var cctx=(att.ctx||ctx)

    cctx.fillStyle=color
    cctx.fillRect(x,y,w,h)
}

function d_circle(x,y,r,color,attt){
    /*
    Attributes:
    ctx - Canvas context
    */
    
    var att=attt||{}

    var cctx=(att.ctx||ctx)

    cctx.beginPath()
    cctx.fillStyle=color
    ctx.arc(x,y,r,0,Math.PI*2,false)
    ctx.fill()
}

function d_line(x1,y1,x2,y2,color,attt){
    /*
    Attributes:
    ctx - Canvas context
    */
    
    var att=attt||{}

    var cctx=(att.ctx||ctx)

    cctx.strokeStyle=color
    cctx.beginPath()
    cctx.moveTo(x1,y1)
    cctx.lineTo(x2,y2)
    cctx.stroke()
}

function d_image(img,x,y,attt){
    /*
    Attributes:
    ctx - Canvas context
    width - width
    height - height
    rotation - rotation
        rotx - rotation point x
        roty - rotation point y
    */
    
    var att=attt||{}

    var cctx=(att.ctx||ctx)

    var tmp=cctx.getTransform()

    cctx.translate(x,y)

    cctx.rotate(att.rot||0)

    if(att.height==undefined){
        cctx.drawImage(img,-(att.rotx||0),-(att.roty||0))
    } else {
        cctx.drawImage(img,-(att.rotx||0),-(att.roty||0),att.width,att.height)
    }

    cctx.setTransform(tmp)

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

function m_average(array){
    return array.reduce((t,v)=>t+v)/array.length
}

function m_bezier2(p1,p2,t){
    return [
        p1[0]+t*(p2[0]-p1[0]),
        p1[1]+t*(p2[1]-p1[1])
    ]
}


//camera

function useCamera(canvctx,cam){

    var cctx=(canvctx||ctx)

    cctx.resetTransform()
    cctx.translate(-cam[0],-cam[1])
    cctx.scale(_detail,_detail)
}

_camera=[0,0]
function movecamera(x,y,cam){
    if(cam==undefined){
        _camera[0]+=x
        _camera[1]+=y
    } else {
        cam[0]+=x
        cam[1]+=y    
    }
    useCamera(ctx,_camera)
}
function setcamera(x,y,cam,canv){
    var cc=(canv||c)
    if(cam==undefined){
        _camera=[x-cc.width/2,y-cc.height/2]
    } else {
        cam=[x-cc.width/2,y-cc.height/2]
    }
    useCamera(ctx,_camera)
}
function dragcamera(x,y,div,cam,canv){
    
    var cc=(canv||c)

    if(cam==undefined){
        var cm=[
            _camera[0]+cc.width/2,
            _camera[1]+cc.height/2
        ]
        var dst=[
            x-cm[0],
            y-cm[1]
        ]
        cm=[
            cm[0]+(dst[0]/div),
            cm[1]+(dst[1]/div)
        ]
        _camera=[
            cm[0]-cc.width/2,
            cm[1]-cc.height/2
        ]
    } else {
        var cm=[
            cam[0]+cc.width/2,
            cam[1]+cc.height/2
        ]
        var dst=[
            x-cm[0],
            y-cm[1]
        ]
        cm=[
            cm[0]+(dst[0]/div),
            cm[1]+(dst[1]/div)
        ]
        cam=[
            cm[0]-cc.width/2,
            cm[1]-cc.height/2
        ]
    }
    useCamera(ctx,_camera)
    //will improve later

}

function dragcameracenter(div,cam){
    if(cam==undefined){
        var dst=[-_camera[0],-_camera[1]]
        _camera=[_camera[0]+(dst[0]/div),_camera[1]+(dst[1]/div)]
    } else {
        var dst=[-cam[0],-cam[1]]
        _camera=[cam[0]+(dst[0]/div),cam[1]+(dst[1]/div)]
    }
    useCamera(ctx,_camera)
}

function getcamerashift(canv){
    var cc=(canv||c)
    return [cc.width/2,cc.height/2]
}

function offCamera(px,py,cam,canv){
    return pointBox(px,py,[(cam||_camera)[0],(cam||_camera)[1],(canv||c).width,(canv||c).height])
}

//physics

phys_gravity=[0,1]
phys_velkeep=0.96
phys_bounce=0

function phys_simple(obj,coll,velkeep,gravity,bounce){

    if(obj.vx==undefined) obj.vx=0
    if(obj.vy==undefined) obj.vy=0
    
    if(!coll(obj.x+obj.vx,obj.y)){
        obj.x+=obj.vx
    } else {
        obj.vx*=-bounce||phys_bounce   
    }
    
    if(!coll(obj.x,obj.y+obj.vy)){
        obj.y+=obj.vy
    } else {
        obj.vy*=-bounce||phys_bounce   
    }
    
    obj.vx*=velkeep||phys_velkeep
    obj.vy*=velkeep||phys_velkeep
    obj.vx+=gravity[0]||phys_gravity[0]
    obj.vy+=gravity[1]||phys_gravity[1]

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



// non zen-js/zen-engine related stuff


class Vector3 {
    constructor(x,y,z){
        this.x=x
        this.y=y
        this.z=z
    }
}
class Vector2 {
    constructor(x,y){
        this.x=x
        this.y=y
    }
}

Vector={
    Add:(a,b)=>{
        if(a.z!=undefined){
            //Vector3
            return new Vector3(a.x+b.x,a.y+b.y,a.z+b.z)
        } else {
            //Vector2
            return new Vector2(a.x+b.x,a.y+b.y)
        }
    }
}






