x=0
y=0

function game(frame){

    x+=deadzone(gp_axes(0,0),0.3)
    y+=deadzone(gp_axes(0,1),0.3)

    d_clear("#FFF")
    d_rect(x,y,20,20,"#0F0")

}

addFrame(game)