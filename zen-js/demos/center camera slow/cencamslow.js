x=0
y=0

function game(frame){

    d_clear("#FFF")

    x=(key("d")-key("a"))*5
    y=(key("s")-key("w"))*5

    movecamera(x,y)

    dragcameracenter(15)


    d_rect(c.width/2-10,c.height/2-10,20,20,"#0F0")
}

addFrame(game)