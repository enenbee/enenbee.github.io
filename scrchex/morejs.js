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
}
Scratch.extensions.register(new MoreJS())
