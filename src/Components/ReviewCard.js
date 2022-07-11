import React from 'react';
import './ReviewCard.css';

function ReviewCard(props) {
    return(
        <div className="card">
          <img className="testimonial-image" src={props.imageUrl} alt="profile-image" />
          <span className="rating">{props.stars}</span>
          <span className="name">{props.name}</span>
          <span className='designation'>{props.designation}</span>
          <hr className="divider-line" />
          <span className="testimonial">{props.testimonial}</span>
        </div>
    )
}

export default ReviewCard;