class MoreJS {
    getInfo() {
        return {
            "id": "MoreJS",
            "name": "MoreJS",
            "blocks": [
                {
                    "opcode":"testblock",
                    "blockType": "reporter",
                    "text": "TestBlock [num1] ^ [num2]",
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
                }
            ],
            "menus": {

            }
        }
    }
    testblock({num1,num2}) {
        return num1**num2
    }
}
Scratch.extensions.register(new MoreJS())