
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
