import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../consts';

const ArtistQuestion = (props) => {
  const {onAnswer, question} = props;
  const {choices, song} = question;

  return (
    <section className="game game--artist" >
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="timer"
          viewBox="0 0 780 780">
          <circle
            className="timer__line"
            cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: ` center`
            }}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button
              className="track__button track__button--play"
              type="button">
            </button>
            <div className="track__status">
              <audio>
                src={song.src}
              </audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {
            choices.map((choice, i) => (
              <div
                key={`${choice.id} + ${i}`}
                className="artist">
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`choice-${i}`}
                  id={`choice-${i}`}
                  onChange={(evt) => {
                    evt.preventDefault();
                    onAnswer(question, choice);
                  }}/>
                <label className="artist__name" htmlFor={`choice-${i}`}>
                  <img
                    className="artist__picture"
                    src={choice.picture}
                    alt={choice.artist} />
                  Lorde
                </label>
              </div>
            ))
          }

        </form>
      </section>
    </section>
  );

};

ArtistQuestion.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default ArtistQuestion;
