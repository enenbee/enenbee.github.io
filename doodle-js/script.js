
searchengine="google" //google,bing,ecosia

var tmp=localStorage.getItem("doodle-engine")

if(tmp==null){
    searchengine="google"
    localStorage.setItem("doodle-engine",searchengine)
} else {
    searchengine=tmp
}

const mform=document.getElementById("mainform")


var tmp=localStorage.getItem("doodle-game")

if(tmp==null){
    gamecode=`
    a=getImage("icon.png")
    a.onload=()=>{
        ctx.drawImage(a,20,20)
    }
    `
    localStorage.setItem("doodle-game",gamecode)
} else {
    gamecode=tmp
}


mform.onsubmit=(e)=>{
    e.preventDefault()
    search(mform.search.value)
}

function tourl(se){
    switch (se){
        case "google":
            return "google.com";
        case "bing":
            return "bing.com";
        case "ecosia":
            return "ecosia.org";
        case "duckduckgo":
            return "duckduckgo.com"
    }
}

function search(data){

    if(data==undefined||data==null) return

    var sr=data
    sr=sr.replace(/\+/g,"%2B")


    sr=sr.replace(/ /g,"+")

    var url="https://www."+tourl(searchengine)+"/search?q="+sr

    window.location.href=url

}

ig=document.getElementById("ingame")

function setgame(i){

    var file=i.files[0]

    var read=new FileReader()

    read.readAsText(file)

    read.onload=()=>{
        localStorage.setItem("doodle-game",read.result)

        location.reload(true)
    }

    
}

ig.onchange=()=>{
    setgame(ig)
}
