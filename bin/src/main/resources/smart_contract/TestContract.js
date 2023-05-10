var bountiesOutput = {
    "contractName": "TestContract",
    "abi": [
        {
            "inputs": [],
            "name": "getStoredData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "storedData",
                    "type": "uint256"
                }
            ],
            "name": "setStoredData",
            "outputs": [],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "testFunc",
            "outputs": [],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getStoredData\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"storedData\",\"type\":\"uint256\"}],\"name\":\"setStoredData\",\"outputs\":[],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"testFunc\",\"outputs\":[],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/TestContract.sol\":\"TestContract\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/InterFaceTest.sol\":{\"keccak256\":\"0xffdb2b72c7002e8322686632dcea2446ea90235425fe00490fc5f0287ef50793\",\"urls\":[\"bzz-raw://bbbaf5e32c94c844f7bb7f30b6f0b4a2720c8136534e9b8e0dcdf22edb8ce170\",\"dweb:/ipfs/QmXCCmmZjiDenVe3BUy7HGf5kSfGpod2D4KzhVi3o6Yrbi\"]},\"d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/TestContract.sol\":{\"keccak256\":\"0x700987761c1c98e98dcebda60b698fab572a7276215b6e15206befa7095c0914\",\"urls\":[\"bzz-raw://31088c0b980c531f569af4e08bd04f1dc6c51c75363092b01d6e2f8b4ef1756f\",\"dweb:/ipfs/QmXgcJZfLXEtuUWEVaJweNBUo7ry11scV99Wh2MqB84128\"]}},\"version\":1}",
    "bytecode": "",
    "deployedBytecode": "",
    "sourceMap": "",
    "deployedSourceMap": "",
    "sourcePath": "d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/TestContract.sol",
    "compiler": {
        "name": "solc",
        "version": "0.8.17+commit.8df45f5f"
    },
    "ast": {
        "absolutePath": "d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/TestContract.sol",
        "exportedSymbols": {
            "InterFaceTest": [
                5
            ],
            "TestContract": [
                57
            ]
        },
        "id": 58,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 7,
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".17"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:1"
            },
            {
                "absolutePath": "d:/intellijproject/ethreumdapp/ethreumdapp/src/main/resources/smart_contract/InterFaceTest.sol",
                "file": "./InterFaceTest.sol",
                "id": 8,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 58,
                "sourceUnit": 6,
                "src": "28:29:1",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 9,
                            "name": "InterFaceTest",
                            "nameLocations": [
                                "95:13:1"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5,
                            "src": "95:13:1"
                        },
                        "id": 10,
                        "nodeType": "InheritanceSpecifier",
                        "src": "95:13:1"
                    }
                ],
                "canonicalName": "TestContract",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": false,
                "id": 57,
                "linearizedBaseContracts": [
                    57,
                    5
                ],
                "name": "TestContract",
                "nameLocation": "79:12:1",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 12,
                        "mutability": "mutable",
                        "name": "storedData",
                        "nameLocation": "129:10:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 57,
                        "src": "116:23:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 11,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "116:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "constant": false,
                        "id": 14,
                        "mutability": "mutable",
                        "name": "walletAddress",
                        "nameLocation": "162:13:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 57,
                        "src": "146:29:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "146:7:1",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "canonicalName": "TestContract.NameContainer",
                        "id": 21,
                        "members": [
                            {
                                "constant": false,
                                "id": 16,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "220:4:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 21,
                                "src": "213:11:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 15,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "213:6:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 18,
                                "mutability": "mutable",
                                "name": "age",
                                "nameLocation": "240:3:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 21,
                                "src": "235:8:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 17,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "235:4:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 20,
                                "mutability": "mutable",
                                "name": "walletAddress",
                                "nameLocation": "262:13:1",
                                "nodeType": "VariableDeclaration",
                                "scope": 21,
                                "src": "254:21:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 19,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "254:7:1",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "NameContainer",
                        "nameLocation": "189:13:1",
                        "nodeType": "StructDefinition",
                        "scope": 57,
                        "src": "182:101:1",
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 28,
                            "nodeType": "Block",
                            "src": "305:121:1",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24,
                                            "name": "walletAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14,
                                            "src": "316:13:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "307830323446374136653245353038374533413565383443353037326333376232423638376436356438",
                                            "id": 25,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "332:42:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "value": "0x024F7A6e2E5087E3A5e84C5072c37b2B687d65d8"
                                        },
                                        "src": "316:58:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 27,
                                    "nodeType": "ExpressionStatement",
                                    "src": "316:58:1"
                                }
                            ]
                        },
                        "id": 29,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 22,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "302:2:1"
                        },
                        "returnParameters": {
                            "id": 23,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "305:0:1"
                        },
                        "scope": 57,
                        "src": "291:135:1",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 38,
                            "nodeType": "Block",
                            "src": "486:42:1",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 36,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34,
                                            "name": "storedData",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "497:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35,
                                            "name": "storedData",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "510:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "497:23:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 37,
                                    "nodeType": "ExpressionStatement",
                                    "src": "497:23:1"
                                }
                            ]
                        },
                        "functionSelector": "2f9530f7",
                        "id": 39,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setStoredData",
                        "nameLocation": "443:13:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 32,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31,
                                    "mutability": "mutable",
                                    "name": "storedData",
                                    "nameLocation": "462:10:1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39,
                                    "src": "457:15:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 30,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "457:4:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "456:17:1"
                        },
                        "returnParameters": {
                            "id": 33,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "486:0:1"
                        },
                        "scope": 57,
                        "src": "434:94:1",
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 55,
                            "nodeType": "Block",
                            "src": "587:119:1",
                            "statements": [
                                {
                                    "assignments": [
                                        46
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 46,
                                            "mutability": "mutable",
                                            "name": "container",
                                            "nameLocation": "619:9:1",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55,
                                            "src": "598:30:1",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_NameContainer_$21_memory_ptr",
                                                "typeString": "struct TestContract.NameContainer"
                                            },
                                            "typeName": {
                                                "id": 45,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 44,
                                                    "name": "NameContainer",
                                                    "nameLocations": [
                                                        "598:13:1"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 21,
                                                    "src": "598:13:1"
                                                },
                                                "referencedDeclaration": 21,
                                                "src": "598:13:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_NameContainer_$21_storage_ptr",
                                                    "typeString": "struct TestContract.NameContainer"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 52,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d61737564",
                                                "id": 48,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "645:7:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_d05d915f8d05376025fc9119ea58cfd2de815485120a4685a137685c456669b0",
                                                    "typeString": "literal_string \"masud\""
                                                },
                                                "value": "masud"
                                            },
                                            {
                                                "hexValue": "3334",
                                                "id": 49,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "653:2:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_34_by_1",
                                                    "typeString": "int_const 34"
                                                },
                                                "value": "34"
                                            },
                                            {
                                                "id": 50,
                                                "name": "walletAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14,
                                                "src": "656:13:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_d05d915f8d05376025fc9119ea58cfd2de815485120a4685a137685c456669b0",
                                                    "typeString": "literal_string \"masud\""
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_34_by_1",
                                                    "typeString": "int_const 34"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 47,
                                            "name": "NameContainer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21,
                                            "src": "631:13:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_NameContainer_$21_storage_ptr_$",
                                                "typeString": "type(struct TestContract.NameContainer storage pointer)"
                                            }
                                        },
                                        "id": 51,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "631:39:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_NameContainer_$21_memory_ptr",
                                            "typeString": "struct TestContract.NameContainer memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "598:72:1"
                                },
                                {
                                    "expression": {
                                        "id": 53,
                                        "name": "storedData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 12,
                                        "src": "688:10:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 43,
                                    "id": 54,
                                    "nodeType": "Return",
                                    "src": "681:17:1"
                                }
                            ]
                        },
                        "functionSelector": "b69ca9a1",
                        "id": 56,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getStoredData",
                        "nameLocation": "545:13:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 40,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "558:2:1"
                        },
                        "returnParameters": {
                            "id": 43,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 42,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56,
                                    "src": "582:4:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 41,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "582:4:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "581:6:1"
                        },
                        "scope": 57,
                        "src": "536:170:1",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 58,
                "src": "61:648:1",
                "usedErrors": []
            }
        ],
        "src": "0:709:1"
    },
    "functionHashes": {
        "getStoredData()": "b69ca9a1",
        "setStoredData(uint256)": "2f9530f7",
        "testFunc()": "037a417c"
    },
    "gasEstimates": null
}