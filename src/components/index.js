import {Component} from 'react'
import './index.css'

class History extends Component {
  state = {userInput: '', searchResults: null}

  onChangeSearchInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onDelete = uniqueNo => {
    console.log(uniqueNo)
    const {searchResults} = this.state
    const filteredUsersData = searchResults.filter(each => each.id !== uniqueNo)
    this.setState({
      searchResults: filteredUsersData,
    })
  }

  render() {
    const {initialHistoryList} = this.props
    const {userInput} = this.state
    const searchResults = initialHistoryList.filter(eachUser =>
      eachUser.title.toLowerCase().includes(userInput.toLowerCase()),
    )
    return (
      <div>
        <div className="top">
          <div className="top-container">
            <img
              className="img-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <form className="form-search">
              <button className="search-button" type="button">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </button>
              <input
                type="search"
                className="input"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
              />
            </form>
          </div>
        </div>
        <div className="bottom">
          <ul className="bottom-list">
           { if(searchResults.length!==0){
            <p className="">There is no history to show</p>
           }
            else{searchResults.map(each => (
              <li className="bottom-list-items">
                <p className="time">{each.timeAccessed}</p>
                <div className="middle-list">
                  <img
                    className="logo-img"
                    src={each.logoUrl}
                    alt="domain logo"
                  />
                  <p className="middle-para1">{each.title}</p>
                  <p className="middle-para2">{each.domainUrl}</p>
                </div>
                <button
                  className="delete-button"
                  type="button"
                  onClick={this.onDelete}
                  data-testid="delete"
                >
                  <img
                    className="delete-image"
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
           }
          </ul>
        </div>
      </div>
    )
  }
}

export default History
