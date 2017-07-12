import React from "react";

class Animations extends React.Component {
  constructor() {
    super();
    this.state = {
      slide: false,
      flip: false
    };
  }

  onSlide() {
    this.setState({slide: true, flip: false});
  }

  onFlip() {
    this.setState({flip: true, slide: false});
  }

  render() {
    return (
      <div>
        <h2>CSS Animations</h2>
        <div className={"card deep-purple z-depth-2 " + (this.state.slide
          ? 'slide'
          : '') + (this.state.flip
          ? 'flip'
          : '')}>
          <div className="card-content white-text">
            <span className="card-title">Awesome Animations!</span>
            <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
          </div>
          <div className="card-action">
            <a onClick={this.onFlip.bind(this)} style={{
              cursor: 'pointer'
            }}>FLIP</a>
            <a onClick={this.onSlide.bind(this)} style={{
              cursor: 'pointer'
            }}>SLIDE</a>
          </div>
        </div>

        <div>
          <strong>Source Video: </strong><a target='_blank' href='https://www.youtube.com/watch?v=8E6J0ZfeyBU'>Academind - ReactJS & CSS Animations Basics - #2 CSS Animation Basics</a>
        </div>
      </div>
    )
  }
}

export default Animations;
