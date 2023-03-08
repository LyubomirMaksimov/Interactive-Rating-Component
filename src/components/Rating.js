import React, { useState } from "react";
import styles from "./Rating.module.css";
import starIcon from "../images/icon-star.svg";
import thankYouImage from "../images/illustration-thank-you.svg";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClicked = (number) => {
    setSelectedRating(number);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles["thank-you-pannel"]}>
        <img src={thankYouImage} alt="thankYouImage" className={styles['thankYouImage']} />

        <p className={styles.selected}>
          You selected {selectedRating} out of 5
        </p>

        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hasitate to get in touch!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler} className={styles.panel}>
      <div className={styles["star-container"]}>
        <img className={styles.star} src={starIcon} alt="star" />
      </div>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => {
          return (
            <button
              type="button"
              key={rating}
              onClick={() => handleRatingClicked(rating)}
              className={`${styles.rating} ${
                selectedRating === rating && styles["rating-selected"]
              }`}
            >
              {rating}
            </button>
          );
        })}
      </div>

      <button
        disabled={selectedRating === undefined}
        className={`${styles.submit} ${
          selectedRating && styles["submit-selected"]
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default Rating;
