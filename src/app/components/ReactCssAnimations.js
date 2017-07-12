import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = {
  transition: 'all 1s ease-out'
};

class ReactCssAnimations extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        'I\'m number 1', 'I\'m number 2', 'I\'m number 3'
      ],
      itemNumber: 3
    };
  }

  onAddItem() {
    this.setState({
      itemNumber: this.state.itemNumber + 1,
      items: this.state.items.concat(['I\m number ' + (this.state.itemNumber + 1)])

    });
  }

  onDeleteItem(id) {
    const newItems = this.state.items.slice();
    newItems.splice(id, 1);
    this.setState({items: newItems});
  }

  render() {
    return (
      <div>
        <h2>React CSS Animations</h2>
        <a className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add Item</a>
        <p>Click Item to Delete</p>
        <ul className="collection">
          <ReactCSSTransitionGroup transitionName="flip" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.state.items.map((item, i) => {
              return (
                <li key={item} className="collection-item" onClick={this.onDeleteItem.bind(this, i)} style={{
                  cursor: 'pointer'
                }}>{item}</li>
              );
            })}
          </ReactCSSTransitionGroup>
        </ul>

        <div>
          <strong>Source Video: </strong><a target='_blank' href='https://www.youtube.com/watch?v=kYVPoo9iGNQ'>Academind - ReactJS & CSS Animations Basics - #4 Animations with ReactCSSTransitionGroup</a>
        </div>
      </div>
    )
  }
}

export default ReactCssAnimations;
