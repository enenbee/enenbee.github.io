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