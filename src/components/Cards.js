import React, {Component} from 'react';
import Card from "./Card";
import PropTypes from "prop-types";

class Cards extends Component {
   render() {

      return (
         <div>
            {this.props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
         </div>
      );
   }
}

Cards.propTypes = {
   profiles: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      company: PropTypes.string
   }))
};

export default Cards;