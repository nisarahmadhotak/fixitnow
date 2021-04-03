import React, { Component } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { AuthenticationConsumer } from "../../LoginRegister/autheticationapi";

export default class CountrySelector extends Component {
  constructor(props) {
    super(props);

    this.options = countryList().getData();

    this.state = {
      options: this.options
    };
  }

  render() {
    return (
      <AuthenticationConsumer>
        {value => {
          const { country } = value;
          return (
            <Select
              options={this.state.options}
              value={country}
              onChange={value.handleShippingChangeOfCountryList}
            />
          );
        }}
      </AuthenticationConsumer>
    );
  }
}
