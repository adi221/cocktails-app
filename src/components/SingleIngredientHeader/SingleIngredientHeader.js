import React, { useEffect } from 'react';
import './SingleIngredientHeader.scss';
import { FaChevronDown } from 'react-icons/fa';
import { connect } from 'react-redux';
import { SHOW_MODAL } from '../../actions/types';
import { Modal } from '../../components';

const SingleIngredientHeader = ({ ingredient, isShowModal, showModal }) => {
  let { strIngredient: name, strDescription: description } = ingredient;
  const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${name}.png`;
  let showMore = false;
  if (description && description.length > 600) {
    showMore = true;
  }

  const turnOffShowMore = () => {
    console.log('workis');
    if (mq.matches) {
      showMore = false;
    }
  };
  const mq = window.matchMedia('(max-width: 825px)');

  useEffect(() => {
    mq.addListener(turnOffShowMore);
  }, []);

  return (
    <div className='single-ingredient-header'>
      <img src={imgSrc} alt='single-ingredient' />
      <div className='single-ingredient-header__content'>
        <h1>{name}</h1>
        <p>{showMore ? description.substring(0, 600) + '...' : description}</p>
        {showMore && (
          <button onClick={showModal}>
            <FaChevronDown />
          </button>
        )}
      </div>
      {isShowModal && (
        <Modal description={description} closeModal={showModal} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isShowModal: state.singleIngredient.show_modal,
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch({ type: SHOW_MODAL }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleIngredientHeader);
