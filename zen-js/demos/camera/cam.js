x=0
y=0

function game(frame){

    d_clear("#FFF")

    setcamera(x,y)

    x+=key("d")-key("a")
    y+=key("s")-key("w")

    

    d_rect(40,0,15,15,"#000")

    d_rect(x,y,20,20,"#0F0")
}

addFrame(game)