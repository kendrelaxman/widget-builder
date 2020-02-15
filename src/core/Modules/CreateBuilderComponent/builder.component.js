import React from 'react';
class BuilderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {componentName: '', checkBoxValue: false, numberofRows:'',numberofColumns:'',numberofRows:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Name of the component:
          <input type="text" value={this.state.componentName} onChange={this.handleChange} />
        </label>
        <label>
          Do you need instruction
          <input type= "checkBox" value={this.state.checkBoxValue} onChange={this.handleChange} />
        </label>
        <label>
          Middle Section
        </label>
        <label>
          Select Number of Rows
          <input type= "text" value={this.state.numberofRows} onChange={this.handleChange} />
        </label>
        <label>
        Select Number of Columns
          <input type= "text" value={this.state.numberofColumns} onChange={this.handleChange} />
          </label>
        <label>
        Select Number of Buttons
          <input type= "text" value={this.state.numberofButtons} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
    }
  }
  
  export default  BuilderComponent;