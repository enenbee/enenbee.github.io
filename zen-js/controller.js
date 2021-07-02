controlon=[false,false,false,false]

window.addEventListener("gamepadconnected", function(e) {
    controlon[e.gamepad.index]=true
})
window.addEventListener("gamepaddisconnected", function(e) {
    controlon[e.gamepad.index]=false
})

function getGamepad(id){
    if(controlon[id]){
        return navigator.getGamepads()[id]
    } else {
        return null
    }
}