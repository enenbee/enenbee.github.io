function rungame(i){

    document.getElementById("load").hidden=true

    var file=i.files[0]

    var read=new FileReader()

    read.readAsText(file)

    read.onload=()=>{
        var code=read.result

        eval(code)

        runLoad()
    }
}