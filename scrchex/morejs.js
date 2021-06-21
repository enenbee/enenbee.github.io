  
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
                            "type":"bool",
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
}
Scratch.extensions.register(new MoreJS())
