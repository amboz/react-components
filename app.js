var GroceryList = (props) => (
  <div>
    <h1>Groceries To Buy</h1>
    <ul>
      {
        props.stuffToBuy.map(function(item) {
          return (
            <GroceryListItem item={item} />
          );
      })
      }
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList stuffToBuy={['1', '2','three']} />, document.getElementById("app"));

// = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked!!!');
//   };

//   return (
//     <ul>
//     {
//       props.stuffToBuy.map(function(item) {
//         return <li onClick={onListItemClick}>{item}</li>
//       })
//     }
//   </ul>
//   )
// };

// var Stuff = () => (
//   <div>
//     <li>stuff</li>
//   </div>
// );

// var MoreStuff = () => (
//   <li>moar stuff</li>
// );