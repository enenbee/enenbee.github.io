
c.width=ratio[0]
c.height=ratio[1]
b.appendChild(c)

_f = setInterval(()=>{
    useCamera(ctx,_camera)

    c.width=ratio[0]*_detail
    c.height=ratio[1]*_detail

    d_clear(clearcolor)
    Frame()

    changed={}
},1000/60)
