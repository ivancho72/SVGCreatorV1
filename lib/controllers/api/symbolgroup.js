'use strict';
//API Express Route implementation for : {objectName}
/**
 * Get Verb : {objectName}
 */
exports.symbolgroups = function (req, res) {
  res.json([
    {
      id: '01',
      name: 'FlowChart'
    },
    {
      id: '02',
      name: 'UML Diagram'
    },
    {
      id: '03',
      name: 'Entities Diagram'
    }
  ]);
};

exports.symbols = function (req, res) {
  switch(req.params.id) {
  case '01':
    res.json([
      {
        name: 'Decision',
        graph: '<rect fill="#ffffff" stroke="#000000" x="8" y="10" width="30" height="30" transform="rotate(45 25 25)"/>'
      },
      {
        name: 'Activity',
        graph: '<rect fill="#ffffff" stroke="#000000" x="2" y="2" width="30" height="30"/>'
      },
      {
        name: 'Start/Stop',
        graph: '<circle fill="#ffffff" stroke="#000000" r="15" cy="17" cx="17"/>'
      },
      {
        name: 'Delay',
        graph: '<path fill="#ffffff" stroke="#000000" d="m0,0 l20,0 l0,0 c10,0 20,10 20,20 c0,10 -10,20 -20,20 l-20,0 l0,-40z"/>'
      },
      {
        name: 'Document',
        graph: '<path fill="#ffffff" stroke="#000000" d="m0,0 l50,0 l0,40 c-24,0 -24,15 -50,6 l0,-45 l0,-1z"/>'
      }
    ]);
    break;
  case '02':
    res.json([
      {
        name: 'Class',
        graph: '  <path fill="#ffffff" stroke="#000000" d="m0,0l40,0l0,40l-40,0l0,-40l0,10l40,0l0,-10l-40,0z"/>'
      },
      {
        name: 'Interface',
        graph: '<g><line fill="#ffffff" stroke="#000000" x2="20" y2="20" x1="0" y1="20"/><circle fill="#ffffff" stroke="#000000" cx="30" cy="20" r="10"/></g>'
      },
      {
        name: 'Use Case',
        graph: '<ellipse fill="#ffffff" stroke="#000000" cx="50" cy="20" rx="50" ry="15"/>'
      },
      {
        name: 'Component',
        graph: ''
      },
      {
        name: 'Package',
        graph: ''
      },
      {
        name: 'Pattern',
        graph: ''
      },
      {
        name: 'Note',
        graph: ''
      },
      {
        name: 'Pattern',
        graph: ''
      },
      {
        name: 'State',
        graph: ''
      },
      {
        name: 'Decision',
        graph: ''
      }
    ]);
    break;
  case '03':
    res.json([
      {
        name: 'Entity',
        graph: ''
      },
      {
        name: 'Attribute',
        graph: ''
      },
      {
        name: 'Weak Entity',
        graph: ''
      }
    ]);
    break;
  default:
    res([]);
  }
};