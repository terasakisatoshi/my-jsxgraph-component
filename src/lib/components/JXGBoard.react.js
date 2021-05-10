import React, {Component} from 'react';
import PropTypes from 'prop-types';

import JXG from 'jsxgraph'

const logic_0 = (brd) => {
  brd.suspendUpdate()
  const a = brd.create('slider', [[2, 8], [6, 8], [0, 3, 6]], { name: 'a' })
  const b = brd.create('slider', [[2, 7], [6, 7], [0, 2, 6]], { name: 'b' })
  const A = brd.create('slider', [[2, 6], [6, 6], [0, 3, 6]], { name: 'A' })
  const B = brd.create('slider', [[2, 5], [6, 5], [0, 3, 6]], { name: 'B' })
  const delta = brd.create('slider', [[2, 4], [6, 4], [0, 0, Math.PI]], { name: '&delta;' })

  const c = brd.create('curve', [
    function (t) { return A.Value() * Math.sin(a.Value() * t + delta.Value()); },
    function (t) { return B.Value() * Math.sin(b.Value() * t); },
    0, 2 * Math.PI], { strokeColor: '#aa2233', strokeWidth: 3 })
  brd.unsuspendUpdate();
}

const logic_1 = (brd) => {
  brd.suspendUpdate()
  const a = brd.create("slider", [[8, 7], [12, 7], [-3, 0.1, 10]], { name: "a" });
  const b = brd.create("slider", [[8, 6], [12, 6], [-1, 1, 5]], { name: "b" });
  const c = brd.create("slider", [[8, 5], [12, 5], [-10, -5, 2]], { name: "c" });
  // y = ax^2+bx+c
  const func = brd.create(
      "functiongraph",
      [
          function (x) {
              return a.Value() * x * x + b.Value() * x + c.Value();
          }
      ]
  )
  brd.unsuspendUpdate();
}

const logicJC = `
$board.setView([-1.5, 2, 1.5, -1]);
// Triangle ABC
A = point(1, 0);
B = point(-1, 0);
C = point(0.2, 1.5);
pol = polygon(A,B,C) <<
        fillColor: '#FFFF00',
        borders: <<
            strokeWidth: 2,
            strokeColor: '#009256'
        >>
    >>;
 
// Perpendiculars and orthocenter i1
pABC = perpendicular(pol.borders[0], C);
pBCA = perpendicular(pol.borders[1], A);
pCAB = perpendicular(pol.borders[2], B);
i1 = intersection(pABC, pCAB, 0);
// Midpoints of segments
mAB = midpoint(A, B);
mBC = midpoint(B, C);
mCA = midpoint(C, A);
 
// Line bisectors and centroid i2
ma = segment(mBC, A);
mb = segment(mCA, B);
mc = segment(mAB, C);
i2 = intersection(ma, mc, 0);
 
// Circum circle and circum center
c = circumcircle(A, B, C) <<
        strokeColor: '#000000',
        dash: 3,
        strokeWidth: 1,
        center: <<
            name: 'i_3',
            withlabel:true,
            visible: true
        >>
    >>;
 
// Euler line 
euler = line(i1, i2) <<
        dash:1,
        strokeWidth: 2,
        strokeColor:'#901B77'
    >>;
`

const LOGICS_JS = [logic_0, logic_1]


/**
Displays Board of JSXGraph
 */
export default class JXGBoard extends Component {
    constructor(props) {
      super(props);
      this.defauflboardAttributes = {}
    }

    componentDidMount() {
      this.drawBox()
    }

    componentDidUpdate(prevProps, prevState) {
      this.drawBox();
      this.props.setProps(
        {value:this.props.example.toString()}
      )
    }

    drawBox(){
      const attributes = {}
      Object.assign(attributes, this.defauflboardAttributes, this.props.boardAttributes || {})
      const board = JXG.JSXGraph.initBoard(this.props.id, attributes)
      if (this.props.example <= 1){
        const logic = LOGICS_JS[this.props.example]
        logic(board)
      }
      else{
        board.jc.parse(logicJC)
      }
    }

    render() {
        return (
            <div>
              <div
                id={this.props.id}
                className="jxgbox"
                style={this.props.style}
              />
            </div>
        );
    }
}

JXGBoard.defaultProps = {};

JXGBoard.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    value: PropTypes.string,
    /**
      * 0 or 1
    */
    example: PropTypes.number,

    boardAttributes: PropTypes.object,
    /**
     * style="width:500px; height:500px;"
     */
    style: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
