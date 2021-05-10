import my_jsxgraph_component
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dcc.Dropdown(
        id="dcc-dropdown",
        options=[
            dict(label="0", value=0),
            dict(label="1", value=1),
        ],
        value=0,
    ),
    dcc.Input(
        id="dcc-input",
        value=0,
    ),
    my_jsxgraph_component.JXGBoard(
        id='jxgboard',
        example=0,
        boardAttributes=dict(
            boundingbox=[-15, 15, 15, -15],
            axis=True,
        ),
        style=dict(width="700px", height="700px"),
    ),
    html.Div(id='output')
])


@app.callback(Output('jxgboard', 'example'), [Input('dcc-dropdown', 'value')])
def update_board(value):
    return int(value)


@app.callback(Output('dcc-input', 'value'), [Input('dcc-dropdown', 'value')])
def update_board(value):
    return int(value)


@app.callback(Output('output', 'children'), [Input('jxgboard', 'value')])
def display_output(value):
    return 'You have drawed logic {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
