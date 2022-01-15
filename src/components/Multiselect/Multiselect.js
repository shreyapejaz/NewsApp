import React, { Component } from "react";
import "./Multiselect.css";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "", label: "-Country-", isDisabled:true },
  { value: "us", label: "USA" },
  { value: "in", label: "India" },
  { value: "gb", label: "United Kingdom" },
  { value: "", label: "-Category-", isDisabled:true },
  { value: "sports", label: "Sports" },
  { value: "politics", label: "Politics" },
  { value: "science", label: "Science" },
  { value: "health", label: "Health" },
];

export default class CreatableMulti extends Component {
    constructor(props) {
        super(props);
      }
  handleChange = (newValue, actionMeta) => {
      var b=''
    for(let i=0;i<newValue.length;i++){
        if(i != newValue.length-1){
          b=b+newValue[i].value+'-'
        }else{
          b=b+newValue[i].value
        }
      }
      this.props.query(b);
  };
  render() {
    return (
      <div className="selectlist">
        <CreatableSelect
          isMulti
          onChange={this.handleChange}
          options={options}
          placeholder="Curious about something?"
        />
      </div>
    );
  }
}
