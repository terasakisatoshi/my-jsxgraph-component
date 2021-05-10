# AUTO GENERATED FILE - DO NOT EDIT

export dash_jxgboard

"""
    dash_jxgboard(;kwargs...)

A JXGBoard component.
Displays Board of JSXGraph
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `boardAttributes` (Dict; optional)
- `example` (Real; optional): 0 or 1
- `style` (Dict; optional): style="width:500px; height:500px;"
- `value` (String; optional)
"""
function dash_jxgboard(; kwargs...)
        available_props = Symbol[:id, :boardAttributes, :example, :style, :value]
        wild_props = Symbol[]
        return Component("dash_jxgboard", "JXGBoard", "my_jsxgraph_component", available_props, wild_props; kwargs...)
end

