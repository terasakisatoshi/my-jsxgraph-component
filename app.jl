using Dash
using DashHtmlComponents
using DashCoreComponents

using MyJsxgraphComponent

app = dash(external_stylesheets = ["https://codepen.io/chriddyp/pen/bWLwgP.css"])

logics = [0, 1, 2]

app.layout = html_div() do
        html_h1("Hello Dash"),
        html_h2("Dash.jl: Julia interface for Dash"),
        html_h3("dash_jxgboard: Julia interface JSXGraph"),
        dcc_dropdown(
            id = "dropdown",
            options = [(label="sample_$(f)", value=f) for f in logics],
            value = logics[begin],
        ),
        dash_jxgboard(
            id="mycomponent", 
            example=0,
            boardAttributes=(
                boundingbox=[-15, 15, 15, -15], 
                axis=true,
            ),
            style=(width="700px", height="700px"),
        ),
        html_div("", id="hidden")
    end

callback!(app,
    Output("mycomponent", "example"),
    Input("dropdown", "value"),
    ) do v
    v
end

callback!(app,
    Output("hidden", "children"),
    Input("mycomponent", "value"),
    ) do v
    !isnothing(v) && "You've selected " * v
end

run_server(app, "0.0.0.0", 8080, debug=true)
