<script>
    export default {
        data() {
            return {
                nodeDataArray: [
                    { key: 0, name: "Ban Ki-moon 반기문", nation: "SouthKorea", title: "Secretary-General of the United Nations", headOf: "Secretariat" },
                    { key: 1, boss: 0, name: "Patricia O'Brien", nation: "Ireland", title: "Under-Secretary-General for Legal Affairs and United Nations Legal Counsel", headOf: "Office of Legal Affairs" },
                    { key: 3, boss: 1, name: "Peter Taksøe-Jensen", nation: "Denmark", title: "Assistant Secretary-General for Legal Affairs" },
                    { key: 9, boss: 3, name: "Other Employees" },
                    { key: 4, boss: 1, name: "Maria R. Vicien - Milburn", nation: "Argentina", title: "General Legal Division Director", headOf: "General Legal Division" },
                    { key: 10, boss: 4, name: "Other Employees" },
                    { key: 5, boss: 1, name: "Václav Mikulka", nation: "CzechRepublic", title: "Codification Division Director", headOf: "Codification Division" },
                    { key: 11, boss: 5, name: "Other Employees" },
                ]
            }
        },
        methods: {
            initGo: function() {
                const $ = go.GraphObject.make;
                var mt8 = new go.Margin(8, 0, 0, 0);
                var mr8 = new go.Margin(0, 8, 0, 0);
                var ml8 = new go.Margin(0, 0, 0, 8);
                var roundedRectangleParams = {
                    parameter1: 2,  // set the rounded corner
                    spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
                };
                var myDiagram = $(go.Diagram, "orgSelfTree", {
                    "undoManager.isEnabled": false,
                    layout: $(go.TreeLayout, {
                        angle: 90,
                        layerSpacing: 40,
                        nodeSpacing: 40,
                    })
                });

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
                            { fill: null, stroke: "#7986cb", strokeWidth: 3 }
                            ),
                            $(go.Placeholder)
                        )  // end Adornment
                    },
                    $(go.Shape, "RoundedRectangle", roundedRectangleParams,
                        { name: "SHAPE", fill: "#fff", strokeWidth: 0 },
                        // gold if highlighted, white otherwise
                        new go.Binding("fill", "isHighlighted", function(h) { return h ? "gold" : "#fff"; }).ofObject()
                    ),
                    $(go.Panel, "Vertical",
                        $(go.Panel, "Horizontal",
                            { margin: 8 },
                            $(go.Picture,  // flag image, only visible if a nation is specified
                                { margin: mr8, visible: false, desiredSize: new go.Size(50, 50) },
                                new go.Binding("source", "nation", this.theNationFlagConverter),
                                new go.Binding("visible", "nation", function(nat) { return nat !== undefined; })
                            ),
                            $(go.Panel, "Table",
                                $(go.TextBlock,
                                    {
                                        row: 0, alignment: go.Spot.Left,
                                        font: "16px Roboto, sans-serif",
                                        stroke: "rgba(0, 0, 0, .87)",
                                        maxSize: new go.Size(160, NaN)
                                    },
                                    new go.Binding("text", "name")
                                ),
                                $(go.TextBlock, this.textStyle("title"),
                                    {
                                        row: 1, alignment: go.Spot.Left,
                                        maxSize: new go.Size(160, NaN)
                                    },
                                    new go.Binding("text", "title")
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
                                new go.Binding("text", "headOf", function(head) { return "Head of: " + head; })
                            ),
                            $(go.TextBlock, this.textStyle("boss"),
                                new go.Binding("margin", "headOf", function(head) { return mt8; }), // some space above if there is also a headOf value
                                new go.Binding("text", "boss", function(boss) {
                                var boss = myDiagram.model.findNodeDataForKey(boss);
                                if (boss !== null) {
                                    return "Reporting to: " + boss.name;
                                }
                                    return "";
                                })
                            )
                        )
                    )
                )
                
                myDiagram.linkTemplate =
                $(go.Link, 
                    go.Link.Orthogonal,
                    { corner: 5, selectable: false },
                    $(go.Shape, { strokeWidth: 3, stroke: "#424242" })
                );

                myDiagram.model =
                $(go.TreeModel,
                {
                    nodeParentKeyProperty: "boss",
                    nodeDataArray: this.nodeDataArray
                });

            },
            textStyle: function(field) {
                return [
                    {
                        font: "12px Roboto, sans-serif", stroke: "rgba(0, 0, 0, .60)",
                        visible: false  // only show textblocks when there is corresponding data for them
                    },
                    new go.Binding("visible", field, function(val) { return val !== undefined; })
                ];
            },
            theNationFlagConverter: function() {
                return "https://www.nwoods.com/images/emojiflags/" + nation + ".png";
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

    </div>
</template>
<style lang="scss" scoped>
    #orgSelfTree {
        box-sizing: border-box;
        width: 100%;
        height: 80vh;
        background-color: #f2f2f2; 
        border: solid 1px black;
    }
</style>