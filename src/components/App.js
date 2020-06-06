import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from "./Form";
import Cards from "./Cards";

class App extends Component {

   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       profiles: testData,
   //    };
   // }

   state = {
      profiles: [],
   };

   addNewProfile = (profileData) => {
      this.setState(prevState => ({
         profiles: [...prevState.profiles, profileData]
      }))
   };

   render() {
      return (
         <div>
            <div className="header"> {this.props.title}</div>
            <Form onSubmit={this.addNewProfile}/>
            <Cards profiles={this.state.profiles}/>
         </div>

      );
   }
}

App.propTypes = {
   title: PropTypes.string
};

export default App;