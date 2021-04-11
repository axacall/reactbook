import React from "react";
import BookList from './BookList';
import BookContextProvider from "../context/BookContext";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </div>
    );
  }
}
export default App;
