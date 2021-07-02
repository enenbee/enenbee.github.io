x=0
y=0

function game(frame){

    d_clear("#FFF")

    dragcamera(x,y,15)

    x+=(key("d")-key("a"))*5
    y+=(key("s")-key("w"))*5

    

    d_rect(40,0,15,15,"#000")

    d_rect(x,y,20,20,"#0F0")
}

addFrame(game)