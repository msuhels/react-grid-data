

var React = require('react')
var createReactClass = require('create-react-class')
var ReactPivot = require('react-pivot')
var ReactDOM = require('react-dom')

var data = require('./data.json')


var reduce = function(row, memo) {

  if(row.type == 'impression'){
     memo.impressioncount = (memo.impressioncount || 0) + 1
  }
    if(row.type == 'load'){
     memo.loadscount = (memo.loadscount || 0) + 1
  }
    if(row.type == 'display'){
     memo.displaycount = (memo.displaycount || 0) + 1     
  }

  return memo
}
var dimensions = [  
  {value: function(row) {
    return row.date
  }, title: 'Date'},
  {value: function(row) {
    return row.host
  }, title: 'Host'}, 
]


var calculations = [  
  {
    title: 'Impressions',
    value: function(row) {
       return row.impressioncount;
    },
    template: function(val, row) {       
        return val;
    },
    className: 'alignCenter'
  },
    {
    title: 'Loads',
    value: function(row) {
       return row.loadscount;
    },
    template: function(val, row) {       
        return val;
    },
    className: 'alignCenter'
  },
  
   {
    title: 'Displays',
    value: function(row) {
       return row.displaycount;
    },
    template: function(val, row) {       
        return val;
    },
    className: 'alignCenter'
  },
    {
    title: 'Load Rate',
    value: function(row) {
       return (row.loadscount/row.impressioncount)*100;
    },
    template: function(val, row) {       
        return val.toFixed(2)+' %';
    },
    className: 'alignCenter'
  },
    {
    title: 'Display Rate',
    value: function(row) {
       return (row.displaycount/row.loadscount)*100;
    },
    template: function(val, row) {       
       return val.toFixed(2)+' %';
    },
    className: 'alignCenter'
  },
]

module.exports = createReactClass({
  getInitialState: function() {
    return {showInput: true}
  },

  render: function() {
    return (<div className="demo">
      <h1>React Pivot</h1>
      <div className="demoCss">
      <ReactPivot rows={data}
                      dimensions={dimensions}
                      calculations={calculations} 
                      reduce={reduce} 
                      activeDimensions={['Date','Host']}
                      nPaginateRows={20} />
                     </div>
                    </div>)

  }
})

