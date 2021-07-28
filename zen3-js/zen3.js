
//this requires three.js in some form

res=[1920,1080]

function makeScene(){
    return new THREE.Scene()
}
function makeCamera(_fov,_near,_far){

    var fov=_fov
    if(fov==undefined)fov=90

    var near=_near
    if(near==undefined)near=0.1

    var far=_far
    if(far==undefined)far=1000
    
    return new THREE.PerspectiveCamera(fov,res[0]/res[1],near,far)
}

function makeRenderer(){
    var out=new THREE.WebGLRenderer()
    out.setSize(res[0],res[1])
    out.shadowMap.enabled=true
    out.shadowMap.type=THREE.BasicShadowMap
    
    return out
}

function litObject(shape,material,rec){
    var out=new THREE.Mesh(shape,material)

    out.receiveShadow=(rec==undefined?true:rec)
    out.castShadow=true

    return out

}

//lights

function ambience(_color,_bright){
    
    var color=_color
    if(color==undefined)color=0xffffff

    var bright=_bright
    if(bright==undefined)bright=0.1
    
    return new THREE.AmbientLight(color,bright)
    
}
function pointLight(pos,_color,_bright,_near,_far){
    
    var color=_color
    if(color==undefined)color=0xffffff

    var bright=_bright
    if(bright==undefined)bright=0.8

    var near=_near
    if(near==undefined)near=0.1

    var far=_far
    if(far==undefined)far=25
    
    var out=new THREE.PointLight(color,bright)
    out.position.set(pos[0],pos[1],pos[2])
    
    out.castShadow=true
    out.shadow.camera.near=near
    out.shadow.camera.far=far
    
    return out
    
}

//materials

function litMaterial(_color){

    var color=_color
    if(color==undefined)color=0xffffff
    
    return new THREE.MeshPhongMaterial({color,wireframe:false})

}

