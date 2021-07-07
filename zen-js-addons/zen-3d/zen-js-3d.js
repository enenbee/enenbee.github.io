cam=[0,0,0]

function threedimtotwodim(x,y,z){
    var sz=(z-cam[2])
    return [
        (x-cam[0])/sz,
        (y-cam[1])/sz
    ]
}

function td_setcamera(x,y,z){
    cam=[x,y,z]
}