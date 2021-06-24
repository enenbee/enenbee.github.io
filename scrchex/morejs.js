
class MoreJS {
    getInfo() {
        return {
            "id": "MoreJS",
            "name": "MoreJS",
            "blocks": [
                {
                    "opcode":"power",
                    "blockType": "reporter",
                    "text": "[num1] ^ [num2]",
                    "arguments": {
                        "num1": {
                            "type":"number",
                            "defaultValue":"2"
                        },
                        "num2": {
                            "type":"number",
                            "defaultValue":"8"
                        }
                    }
                },
                {
                    "opcode":"ifelsethen",
                    "blockType": "reporter",
                    "text": "if [iff] then [then] else [eelse]",
                    "arguments": {
                        "iff": {
                            "type":"Boolean",
                            "defaultValue":""
                        },
                        "then": {
                            "type":"string",
                            "defaultValue":"this is true"
                        },
                        "eelse": {
                            "type":"string",
                            "defaultValue":"this is false"
                        }
                    }
                },
                {
                    "opcode":"randomfloat",
                    "blockType": "reporter",
                    "text": "Random from 0 to 1",
                    "arguments": {}
                },
                {
                    "opcode":"atan2",
                    "blockType": "reporter",
                    "text": "atan2 [y] [x]",
                    "arguments": {
                        "y": {
                            "type":"number",
                            "defaultValue":"9"
                        },
                        "x": {
                            "type":"number",
                            "defaultValue":"4"
                        }
                    }
                },
                {
                    "opcode":"script",
                    "blockType": "reporter",
                    "text": "Javascript [code]",
                    "arguments": {
                        "code": {
                            "type":"string",
                            "defaultValue":"10/4"
                        }
                    }
                },
                {
                    "opcode":"limit",
                    "blockType": "reporter",
                    "text": "limit [num] to [dec] decimal points",
                    "arguments": {
                        "num": {
                            "type":"number",
                            "defaultValue":"74.642"
                        },
                        "dec": {
                            "type":"number",
                            "defaultValue":"2"
                        }
                    }
                },
                {
                    "opcode":"indexstart",
                    "blockType": "reporter",
                    "text": "first instance of [word] in [sentence] starting at [start]",
                    "arguments": {
                        "word": {
                            "type":"string",
                            "defaultValue":"hello"
                        },
                        "sentence": {
                            "type":"string",
                            "defaultValue":"hello world"
                        },
                        "start":{
                            "type":"number",
                            "defaultValue":"0"
                        }
                    }
                },
                {
                    "opcode":"indexend",
                    "blockType": "reporter",
                    "text": "last instance of [word] in [sentence] ending at [end]",
                    "arguments": {
                        "word": {
                            "type":"string",
                            "defaultValue":"world"
                        },
                        "sentence": {
                            "type":"string",
                            "defaultValue":"hello world"
                        },
                        "end":{
                            "type":"number",
                            "defaultValue":"12"
                        }
                    }
                },
                {
                    "opcode":"fetch",
                    "blockType": "reporter",
                    "text": "fetch from [urlz]",
                    "arguments": {
                        "urlz": {
                            "type":"string",
                            "defaultValue":"https://v2.jokeapi.dev/joke/Any?safe-mode"
                        }
                    }
                },
                {
                    "opcode":"scrape",
                    "blockType": "reporter",
                    "text": "scrape from [urlz]",
                    "arguments": {
                        "urlz": {
                            "type":"string",
                            "defaultValue":"www.google.com"
                        }
                    }
                },
                {
                    "opcode":"isundefined",
                    "blockType": "Boolean",
                    "text": "is [value] undefined",
                    "arguments": {
                        "value": {
                            "type":"string",
                            "defaultValue":"defined"
                        }
                    }
                },
                {
                    "opcode":"substringy",
                    "blockType": "reporter",
                    "text": "get letters in [string] from [start] to [end]",
                    "arguments": {
                        "string": {
                            "type":"string",
                            "defaultValue":"hello world"
                        },
                        "start": {
                            "type":"number",
                            "defaultValue":"2"
                        },
                        "end": {
                            "type":"number",
                            "defaultValue":"5"
                        }
                    }
                },
                {
                    "opcode":"exactsame",
                    "blockType": "Boolean",
                    "text": "are [a] and [b] the exact same?",
                    "arguments": {
                        "a": {
                            "type":"string",
                            "defaultValue":"Hello world"
                        },
                        "b": {
                            "type":"string",
                            "defaultValue":"hello world"
                        }
                    }
                },
                {
                    "opcode":"tolowercase",
                    "blockType": "reporter",
                    "text": "change [string] to lowercase",
                    "arguments": {
                        "string": {
                            "type":"string",
                            "defaultValue":"Hello world"
                        }
                    }
                },
                {
                    "opcode":"touppercase",
                    "blockType": "reporter",
                    "text": "change [string] to uppercase",
                    "arguments": {
                        "string": {
                            "type":"string",
                            "defaultValue":"Hello world"
                        }
                    }
                },
                {
                    "opcode":"timesincesimple",
                    "blockType": "reporter",
                    "text": "Milliseconds since year: [year] month: [month] day: [day]",
                    "arguments": {
                        "year": {
                            "type":"number",
                            "defaultValue":"2000"
                        },
                        "month": {
                            "type":"number",
                            "defaultValue":"1"
                        },
                        "day": {
                            "type":"number",
                            "defaultValue":"1"
                        }
                    }
                },
                {
                    "opcode":"timesinceadvanced",
                    "blockType": "reporter",
                    "text": "Milliseconds since year: [year] month: [month] day: [day] hour: [hour] minute: [minute] second: [second] millisecond: [millisecond]",
                    "arguments": {
                        "year": {
                            "type":"number",
                            "defaultValue":"2000"
                        },
                        "month": {
                            "type":"number",
                            "defaultValue":"1"
                        },
                        "day": {
                            "type":"number",
                            "defaultValue":"1"
                        },
                        "hour": {
                            "type":"number",
                            "defaultValue":"0"
                        },
                        "minute": {
                            "type":"number",
                            "defaultValue":"0"
                        },
                        "second": {
                            "type":"number",
                            "defaultValue":"0"
                        },
                        "millisecond": {
                            "type":"number",
                            "defaultValue":"0"
                        }
                    }
                },
                {
                    "opcode":"gettime",
                    "blockType": "reporter",
                    "text": "Time in milliseconds",
                    "arguments": {}
                }
                
            ],
            "menus": {

            }
        }
    }
    power({num1,num2}) {
        return num1**num2
    }
    ifelsethen({iff,then,eelse}) {
        return iff?then:eelse
    }
    randomfloat() {
      return Math.random()
    }
    atan2({y,x}){
        return Math.atan2(y,x) * (180/Math.PI)
    }
    script({code}){
        return eval(code)
    }
    limit({num,dec}){
        return num.toFixed(dec)
    }
    indexstart({word,sentence,start}){
        return sentence.indexOf(word,start-1)+1
    }
    indexend({word,sentence,end}){
        return sentence.lastIndexOf(word,end-1)+1
    }
    isundefined({value}){
        return value==undefined
    }
    fetch({urlz}){
        return fetch(urlz)
    }
    scrape({urlz}){
        var xhr= new XMLHttpRequest()
        xhr.open("get",urlz,false)
        xhr.send()
        if(xhr.status==200) {
            resolve(xhr.response.documentElement.innerHTML)
        } else {
            reject(status)   
        }
        
    }
    substringy({string,start,end}){
        return string.substring(start-1,end)
    }
    exactsame({a,b}){
        return a===b
    }
    tolowercase({string}){
        return string.toLowerCase()
    }
    touppercase({string}){
        return string.toUpperCase()
    }
    timesincesimple({year,month,day}){
    
        var a=new Date(year,month-1,day)
        
        return new Date()-a
    
    }
    timesinceadvanced({year,month,day,hour,minute,second,millisecond}){
    
        var a=new Date(year,month-1,day,hour,minute,second,millisecond)
        
        return new Date()-a
    
    }
    gettime(){
        return new Date()-0
    }

}
Scratch.extensions.register(new MoreJS())
