_base100code="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()-_=+[{]}\|;:'\",<.>/?€ƒ„…†‡Š"

function base100encode(number){
    var n=""+number
    if(n.length%2==1) n="0"+n

    return n.match(/.{1,2}/g).map((v)=>_base100code[v/1]).join("")

}
