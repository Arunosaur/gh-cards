import React, {Component} from 'react';
import PropTypes from "prop-types";

class Card extends Component {
   render() {
      const profile = this.props;
      return (
         <div className="github-profile">
            <img src={profile.avatar_url}/>
            <div className="info">
               <div className="name"> {profile.name}
               </div>
               <div className="company"> {profile.company}
               </div>
            </div>
         </div>
      );
   }
}

Card.propTypes = {
   avatar_url: PropTypes.string,
   name:PropTypes.string,
   company:PropTypes.string
};

export default Card;
