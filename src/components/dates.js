import React from 'react';
import './MDates.css'

const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dataIncrement(inc) {
  let data = new Date();
  data.setDate(data.getDate() + inc);
  return data;
}

class MovieDates extends React.Component {
  state = { day: "", month: "", hour: "" }

  handleDateClick = (e) => {
    e.preventDefault();
    this.setState({ day: e.target.innerHTML.slice(4, e.target.innerHTML.indexOf(".")) });
    this.setState({ month: e.target.innerHTML.slice(e.target.innerHTML.indexOf(".") + 1, e.target.innerHTML.lenght) });
  }

  handleHourClick = (e) => {
    e.preventDefault();
    this.setState({ hour: e.target.innerHTML })
  }
  handleConfirm = () => {
    console.log(this.state);
  }
  render() {
    return (
      <div className="col-sm-12 col-xl-6 center">
        <div className="card row justify-content-center">
          <div className="card-title">Data</div>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(0).getDay()]} ${dataIncrement(0).getDate()}.${dataIncrement(0).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(1).getDay()]} ${dataIncrement(1).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(2).getDay()]} ${dataIncrement(2).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(3).getDay()]} ${dataIncrement(3).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(4).getDay()]} ${dataIncrement(4).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(5).getDay()]} ${dataIncrement(5).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                  <th>
                    <div onClick={this.handleDateClick} className="DataBox center-align">{`${daysArray[dataIncrement(6).getDay()]} ${dataIncrement(6).getDate()}.${dataIncrement(1).getMonth() + 1}`}</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="card-title">Godziny</div>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="btn red hoverable" onClick={this.handleHourClick}>
                      15:00
                          </div>
                  </th>
                  <th>
                    <div className="btn red hoverable" onClick={this.handleHourClick}>
                      17:00
                          </div>
                  </th>
                  <th>
                    <div className="btn red hoverable" onClick={this.handleHourClick}>
                      19:00
                          </div>
                  </th>
                  <th>
                    <div className="btn red hoverable" onClick={this.handleHourClick}>
                      21:00
                          </div>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="card-content">
              <div className="btn blue hoverable" onClick={this.handleConfirm}>
                SEND
                    </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDates;