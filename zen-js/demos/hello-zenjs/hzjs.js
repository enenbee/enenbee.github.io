function text(frame){

    d_clear("#FFF")

    var shift=30
    var wave=440

    d_text("Hello ZenJS!",(frame+shift)%(800+shift*2)-shift,
    (1+Math.sin(m_radians(frame)))/2*wave
    ,"#000"
    )

}

addFrame(text)