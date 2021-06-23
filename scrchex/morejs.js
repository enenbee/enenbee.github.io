//const jsdom = require('jsdom')
//const dom = new jsdom.JSDOM("")
//const jquery = require('jquery')(dom.window)

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
                    "opcode":"gethtml",
                    "blockType": "reporter",
                    "text": "get data from [urlz]",
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
    gethtml({urlz}){
        //code from this dude https://scratch.mit.edu/discuss/topic/277217/

        $.ajaxSetup({
            async: false
        })
        $.get('https://cors-anywhere.herokuapp.com/'+urlz,(data)=>{
            window.httpdata=data
        })

        return window.httpdata
    }
    substringy({string,start,end}){
        return string.substring(start-1,end)
    }
    exactsame({a,b}){
        return a===b
    }

}
Scratch.extensions.register(new MoreJS())
