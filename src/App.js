import React from 'react';
import styles from './App.module.css';
import { Cards, CountryPicker, Chart } from "./components";
import { getData } from "./api"
import coronaImage from "./image/img.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  }
  async componentDidMount() {
    const fetchedData = await getData();
    this.setState({ data: fetchedData });


  }

  countryChange = async (country) => {
    const fetchedData = await getData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19 image" />
        <Cards data={data} />
        <CountryPicker countryChange={this.countryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
