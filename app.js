var GroceryList = () => (
  <div>
    <h1>Groceries To Buy</h1>
    <GroceryListItem stuffToBuy={['omg', 'this works?', 'cool']}/>
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
    console.log('I got clicked!!!');
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <ul>
      {
        this.props.stuffToBuy.map((item) => {
          return <li style={style} onClick={this.onListItemClick.bind(this)}>{item}</li>
        })
      }
      </ul>
    );
  }
}

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

ReactDOM.render(<GroceryList />, document.getElementById("app"));