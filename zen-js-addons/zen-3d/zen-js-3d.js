cam=[0,0,0]

function 3dto2d(x,y,z){
    var sz=(z-cam[2])
    return [
        (x-cam[0])/sz,
        (y-cam[1])/sz
    ]
}