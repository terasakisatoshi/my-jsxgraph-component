# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class JXGBoard(Component):
    """A JXGBoard component.
Displays Board of JSXGraph

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- boardAttributes (dict; optional)

- example (number; optional):
    0 or 1.

- style (dict; optional):
    style=\"width:500px; height:500px;\".

- value (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, example=Component.UNDEFINED, boardAttributes=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'boardAttributes', 'example', 'style', 'value']
        self._type = 'JXGBoard'
        self._namespace = 'my_jsxgraph_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'boardAttributes', 'example', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(JXGBoard, self).__init__(**args)
