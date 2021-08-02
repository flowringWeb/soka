<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            initGo: function() {
                const $ = go.GraphObject.make;
                var mt8 = new go.Margin(8, 0, 0, 0);
                var ml8 = new go.Margin(0, 0, 0, 8);
                var my8 = new go.Margin(8, 0, 8, 0);
                var roundedRectangleParams = {
                    parameter1: 2,  // set the rounded corner
                    spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // 使內容一直到圓角的內邊緣
                };
                var myDiagram = $(go.Diagram, "orgSelfTree", {
                    "undoManager.isEnabled": true,
                    layout: $(go.TreeLayout, {
                        angle: 90,
                        layerSpacing: 40,
                        nodeSpacing: 40,
                    })
                });

                //node節點樣板
                myDiagram.nodeTemplate = 
                $(go.Node, "Auto",
                    {
                        locationSpot: go.Spot.Top,
                        isShadowed: true, shadowBlur: 1,
                        shadowOffset: new go.Point(0, 1),
                        shadowColor: "rgba(0, 0, 0, .14)",
                        selectionAdornmentTemplate:
                        $(go.Adornment, "Auto",
                            $(go.Shape, "RoundedRectangle", roundedRectangleParams,
                            { fill: null, stroke: "#7986cb", strokeWidth: 1 }
                            ),
                            $(go.Placeholder)
                        )  // end Adornment
                    },
                    $(go.Shape, "RoundedRectangle", roundedRectangleParams,
                        { name: "SHAPE", fill: "#fff", strokeWidth: 0 },
                    ),
                    $(go.Panel, "Vertical",
                        $(go.Panel, "Horizontal",
                            { margin: 12 },
                            $(go.Panel, "Table",
                                $(go.TextBlock,
                                    {
                                        row: 0, alignment: go.Spot.Left,
                                        font: "1rem Roboto, sans-serif",
                                        stroke: "rgba(0, 0, 0, .87)",
                                        maxSize: new go.Size(160, NaN)
                                    },
                                    new go.Binding("text", "title")
                                ),
                                $(go.TextBlock, this.textStyle("name"),
                                    {
                                        margin: mt8,
                                        row: 1, alignment: go.Spot.Left,
                                        maxSize: new go.Size(160, NaN)
                                    },
                                    new go.Binding("text", "name")
                                ),
                                $("PanelExpanderButton", "INFO",
                                    { row: 0, column: 1, rowSpan: 2, margin: ml8 }
                                )
                            )
                        ),
                        $(go.Shape, "LineH",
                            {
                                stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
                                height: 1, stretch: go.GraphObject.Horizontal
                            },
                            new go.Binding("visible").ofObject("INFO")  // only visible when info is expanded
                        ),
                        $(go.Panel, "Vertical",
                            {
                                name: "INFO",  // identify to the PanelExpanderButton
                                stretch: go.GraphObject.Horizontal,  // take up whole available width
                                margin: 8,
                                defaultAlignment: go.Spot.Left,  // thus no need to specify alignment on each element
                            },
                            $(go.TextBlock, this.textStyle("headOf"),
                                new go.Binding("text", "headOf", function(head) { 
                                    return head + ':'; 
                                })
                            ),
                            $(go.Panel, "Table",
                                new go.Binding("itemArray", "group"),
                                {
                                    itemTemplate:
                                    $(go.Panel, "TableRow",
                                        $(go.TextBlock,
                                            new go.Binding("text", "name"),
                                            { column: 0, margin: 2 }
                                        ),
                                        $(go.TextBlock,
                                            new go.Binding("text", "age"),
                                            { column: 1, margin: 2 }
                                        ),
                                    )
                                }
                            ),
                            $(go.Shape, "LineH",
                                {
                                    stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1, 
                                    strokeDashArray:[1, 1],
                                    height: 1,
                                },
                                { margin: my8 },
                                new go.Binding("visible").ofObject("INFO")
                            ),
                            $(go.TextBlock, this.textStyle("headOf2"),
                                new go.Binding("text", "headOf2", function(head) { 
                                    return head + ':'; 
                                })
                            ),
                            $(go.Panel, "Table",
                                new go.Binding("itemArray", "group2"),
                                {
                                    itemTemplate:
                                    $(go.Panel, "TableRow",
                                        $(go.TextBlock,
                                            new go.Binding("text", "name"),
                                            { column: 0, margin: 2 }
                                        ),
                                        $(go.TextBlock,
                                            new go.Binding("text", "age"),
                                            { column: 1, margin: 2 }
                                        ),
                                    )
                                }
                            ),
                            // $(go.TextBlock, this.textStyle("boss"),
                            //     new go.Binding("margin", "headOf", function(head) { return mt8; }), // some space above if there is also a headOf value
                            //     new go.Binding("text", "boss", function(boss) {
                            //     var boss = myDiagram.model.findNodeDataForKey(boss);
                            //     if (boss !== null) {
                            //         return "Reporting to: " + boss.name;
                            //     }
                            //         return "";
                            //     })
                            // )
                        )
                    )
                )
                
                //連結設定
                myDiagram.linkTemplate =
                $(go.Link, 
                    go.Link.Orthogonal,
                    { corner: 5, selectable: false },
                    $(go.Shape, { strokeWidth: 3, stroke: "#424242" })
                );

                //資料流
                myDiagram.model =
                $(go.TreeModel,
                {
                    nodeParentKeyProperty: "boss",
                    nodeDataArray: this.nodeDataArray
                });

                //建立左上角追蹤視窗
                var myOverview =
                $(go.Overview, "myOverviewDiv",
                { observed: myDiagram, contentAlignment: go.Spot.Center }); 

            },
            textStyle: function(field) {    
                return [
                    {
                        font: "bold 12px Roboto, sans-serif", stroke: "rgba(0, 0, 0, .60)",
                        visible: true  // only show textblocks when there is corresponding data for them
                    },
                    new go.Binding("visible", field, function(val) { return val !== undefined; })
                ];
            },
        },
        mounted: function() {
            this.initGo();
        }
    }
</script>
<template>
    <div style="position: relative;">
        <div id="orgSelfTree"></div>
        <div id="myOverviewDiv"></div> 
    </div>
</template>
<style lang="scss" scoped>
    #orgSelfTree {
        box-sizing: border-box;
        width: 100%;
        // height: 80vh;
        background-color: #f2f2f2; 
        border: solid 1px black;
    }

    #myOverviewDiv {
        position: absolute;
        width: 200px;
        height: 100px;
        top: 10px;
        left: 10px;
        background-color: #f2f2f2;
        z-index: 300;
        border: solid 1px #7986cb;
    }
</style>