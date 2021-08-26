
c.width=ratio[0]
c.height=ratio[1]
b.appendChild(c)

_f = setInterval(()=>{
    _frame++

    ctx.resetTransform()
    ctx.translate(-_camera[0],-_camera[1])
    ctx.scale(_detail,_detail)

    c.width=ratio[0]*_detail
    c.height=ratio[1]*_detail

    d_clear(clearcolor)
    Frame()

    changed={}
},1000/60)
