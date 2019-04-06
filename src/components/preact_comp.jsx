import { h, render, Component } from 'preact';
/** @jsx h */

class Asd extends Component {
  render() {
    return <div id="reactBodyComp">
		  <span>Injected to body</span>
	  </div>;
  }
}
render(<Asd />, document.body);