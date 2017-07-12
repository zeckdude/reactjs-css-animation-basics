import React from "react";

class Transitions extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
      scale: 1
    };
  }

  onHide() {
    this.setState({opacity: 0});
  }

  onScale() {
    this.setState({
      scale: this.state.scale > 1
        ? 1
        : 1.3
    });
  }

  render() {
    const styles = {
      transition: 'all 1s ease-out'
    };

    return (
      <div>
        <h2>CSS Transitions</h2>
        <div className="card deep-purple z-depth-2" style={{
          ...styles,
          opacity: this.state.opacity,
          transform: 'scale(' + this.state.scale + ')'
        }}>
          <div className="card-content white-text">
            <span className="card-title">Awesome Animations!</span>
            <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
          </div>
          <div className="card-action">
            <a onClick={this.onHide.bind(this)} style={{
              cursor: 'pointer'
            }}>HIDE</a>
            <a onClick={this.onScale.bind(this)} style={{
              cursor: 'pointer'
            }}>SCALE</a>
          </div>
        </div>

        <div>
          <strong>Source Video: </strong><a target='_blank' href='https://www.youtube.com/watch?v=ztvNwFV0Ai0'>Academind - ReactJS & CSS Animations Basics - #1 CSS Transition Basics</a>
        </div>
      </div>
    )
  }
}

export default Transitions;
