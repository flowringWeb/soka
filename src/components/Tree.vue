<script>
import go from "gojs";
import { SideTreeLayout } from "@/SideTreeLayout.js";
export default {
    data() {
        return {
            // 初始化JSON格式
            modelObj: {
                class: "go.TreeModel",
                nodeDataArray: [
                    {
                        key: 1,
                        name: "1欧阳欧阳",
                        department: "桃園東區女子部長",
                    },
                    {
                        key: 2,
                        parent: 1,
                        name: "2Copricat",
                        department: "八德區",
                        note: "副本部長"
                    },
                    {
                        key: 3,
                        parent: 1,
                        name: "3Demeter",
                        department: "平鎮區",
                    },
                    {
                        key: 4,
                        parent: 2,
                        name: "4test",
                        department: "计算机视觉",
                        note: {
                            secName: "兩支部長",
                            content: [
                                {
                                    name: "小明",
                                    num: 23
                                },
                                {
                                    name: "小玉",
                                    num: 22
                                }
                            ]
                        }
                    },
                    {
                        key: 5,
                        parent: 1,
                        name: "5test",
                        department: "大溪區",
                        isAssistant: true,  
                    },
                    {
                        key: 6,
                        parent: 2,
                        name: "6Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 7,
                        parent: 3,
                        name: "7Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 8,
                        parent: 3,
                        name: "8Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 88,
                        parent: 5,
                        name: "88Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 9,
                        parent: 5,
                        name: "9Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 10,
                        parent: 4,
                        name: "10Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 11,
                        parent: 4,
                        name: "11Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 12,
                        parent: 4,
                        name: "12Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 13,
                        parent: 4,
                        name: "13Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 14,
                        parent: 6,
                        name: "14Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 15,
                        parent: 6,
                        name: "15Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 16,
                        parent: 6,
                        name: "16Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 17,
                        parent: 6,
                        name: "17Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 15,
                        parent: 7,
                        name: "15Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 16,
                        parent: 7,
                        name: "16Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 17,
                        parent: 7,
                        name: "17Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 18,
                        parent: 7,
                        name: "18Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 19,
                        parent: 8,
                        name: "19Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 20,
                        parent: 8,
                        name: "20Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 21,
                        parent: 88,
                        name: "21Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 22,
                        parent: 88,
                        name: "22Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 23,
                        parent: 9,
                        name: "23Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 24,
                        parent: 9,
                        name: "24Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 25,
                        parent: 9,
                        name: "25Demeter",
                        department: "计算机视觉",
                    },
                    {
                        key: 26,
                        parent: 9,
                        name: "26Demeter",
                        department: "计算机视觉",
                    },
                ],
            },
        }
    },
    methods: {
        initGo: function () {
            const $ = go.GraphObject.make;
            var myDiagram = $(go.Diagram, "orgSelfTree", {
                "undoManager.isEnabled": false,
                layout: $(go.TreeLayout, {
                    angle: 90,
                    layerSpacing: 40,
                    nodeSpacing: 50,
                })
            });

            var tooltiptemplate =
            $("ToolTip", {
                    "Border.fill": "#409af2",
                    "Border.stroke": "#409af2",
                }, $(go.TextBlock, {
                    font: "bold 1rem Helvetica, bold Arial, sans-serif",
                    stroke: "#FFF",
                    margin: 5
                    },
                    new go.Binding("text", "", this.tooltipTextConverter))
            );

            // 定義節點模板
            myDiagram.nodeTemplate = $(
                go.Node,
                "Spot",
                {
                    toolTip: tooltiptemplate,
                    // isShadowed: true,
                    // shadowOffset: new go.Point(0, 2),
                    // shadowBlur: 10,
                    // shadowColor: "#ccc",
                    // movable: false,
                    // selectionAdorned: false,
                },
                $(
                    go.Panel,
                    "Position",
                    // $(
                    //     //整个卡片
                    //     go.Shape,
                    //     "RoundedRectangle",
                    //     {
                    //         fill: "white",
                    //         strokeWidth: 0,
                    //         width: 100,
                    //         height: 100,
                    //     },
                    //     new go.Binding("fill", "color")
                    // ),

                    // $(
                    //     go.Panel,
                    //     "Vertical",
                    //     $(
                    //         go.Panel,
                    //         "Spot",
                    //         {
                    //             isClipping: true,
                    //             cursor: "pointer",
                    //         },
                    //         $(go.Shape, "Circle", {
                    //             width: 80,
                    //             margin: new go.Margin(10, 20, 0, 20),
                    //         }),
                    //         $(
                    //             go.Picture,
                    //             {
                    //             name: "Picture",
                    //             desiredSize: new go.Size(100, 100),
                    //             },
                    //             new go.Binding("source", "thumb_avatar")
                    //         )
                    //     )
                    // ),

                    $(
                        go.Panel,
                        "Table",
                        {
                            margin: new go.Margin(10, 0, 0, 0),
                        },
                        $(
                            // 姓名
                            go.TextBlock,
                            "姓名",
                            {
                                stroke: "rgba(0, 0, 0, 0.8)",
                                font: "bold 14px sans-serif",
                                editable: false,
                                isMultiline: false,
                                margin: new go.Margin(0, 0, 48, 0),
                                cursor: "pointer",
                            },
                            new go.Binding("text", "department")
                        ),
                        $(
                            // 部門
                            go.TextBlock,
                            "自然语言理解",
                            {
                                // width: 100,
                                textAlign: "center",
                                stroke: "rgba(0, 0, 0, 0.5)",
                                font: " 12px sans-serif",
                                editable: false,
                                isMultiline: false,
                                margin: new go.Margin(15, 0, 15, 0),
                                cursor: "pointer",
                            },
                            new go.Binding("text", "name")
                        )

                    )
                ),

            );
            myDiagram.linkTemplate = $(
                go.Link,
                {
                    routing: go.Link.Orthogonal,
                    corner: 5,
                    relinkableFrom: true,
                    relinkableTo: true,
                },
                $(go.Shape, { strokeWidth: 1.5, stroke: "#555" })
            );
            
            myDiagram.model = go.Model.fromJson(this.modelObj);

            // make sure new data keys are unique positive integers
            // var lastkey = 1;
            // myDiagram.model.makeUniqueKeyFunction = function (model, data) {
            //     var k = data.key || lastkey;
            //     while (model.findNodeDataForKey(k)) k++;
            //     data.key = lastkey = k;
            //     return k;
            // };


            // var myDiagram = $(go.Diagram, "orgSelfTree", {
            //         "undoManager.isEnabled": false,
            //         layout: $(SideTreeLayout, {
            //             angle: 90,
            //             layerSpacing: 35,
            //             nodeSpacing: 100,
            //     }),
            // });
        },
        // SideTreeLayout() {
        //     go.TreeLayout.call(this);
        // },
        
        // tooltipTextConverter: function(data) {
        //     console.log('=>',data);
        //     let str = "";
        //     str += data.note;
        //     return str;
        // },
        tooltipTextConverter: function(data) {
            var str = data.note.secName;
            data.note.content.forEach((item)=> {
                var context = 
                `
                    <p>${item.name} ${item.num}</p>
                `
                str += context
            })
            return str;
        },
        showToolTip () {

        }
    },
    mounted: function() {
        this.initGo();
    }
}
</script>
<template>
    <div>
        <div id="orgSelfTree"></div>
        <!-- <div id="toolTipDIV" style="position: absolute; background: white; z-index: 1000; display: none;">
            <p id="toolTipParagraph">Tooltip</p>
        </div> -->
    </div>
</template>
<style lang="scss">
    #orgSelfTree {
        box-sizing: border-box;
        width: 100%;
        height: 80vh;
        // overflow: auto;
    }
    
</style>