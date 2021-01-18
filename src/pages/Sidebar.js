import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCounter } from "../actions/counterActions";

class Sidebar extends Component {
  render() {
    const { resetCounter, counterObj } = this.props;
    return (
      <div className="side">
        
        <h2>{counterObj.counterTitle}: {counterObj.count}</h2>
        <input type="button" className="btn" value="Reset Counter" onClick={resetCounter} />

        <h2>Arcu bibendum</h2>
        <h5>Sit amet mattis vulputate</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla..</p>
        <h3>Massa enim</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterObj: state.counter
  }
}

const mapDispatchToProps = {
  resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);