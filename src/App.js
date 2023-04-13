import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  console.log(searchField);

  const onSearchEvent = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((users) => setMonsters(users));
  }, []);

  console.log(filteredMonster);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchEvent}
        className="search-box"
        placeholder="Search a monster"
      />

      <div>
        <CardList monsters={filteredMonster} />
      </div>
      {/* 

       */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((result) => result.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchEvent = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchEvent } = this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchEvent}
//           className="search-box"
//           placeholder="Search a monster"
//         />

//         <div>
//           <CardList monsters={filteredMonster} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
