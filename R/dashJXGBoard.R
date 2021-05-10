# AUTO GENERATED FILE - DO NOT EDIT

dashJXGBoard <- function(id=NULL, boardAttributes=NULL, example=NULL, style=NULL, value=NULL) {
    
    props <- list(id=id, boardAttributes=boardAttributes, example=example, style=style, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'JXGBoard',
        namespace = 'my_jsxgraph_component',
        propNames = c('id', 'boardAttributes', 'example', 'style', 'value'),
        package = 'myJsxgraphComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
