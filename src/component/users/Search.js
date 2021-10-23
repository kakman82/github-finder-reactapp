import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  //! global state erişmek için useContent hook initial ediyoruz ve artık buradan reducerda tanımlanan fonksiyonlara erişiyoruz - searchUsers gibi
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // eğer text boş ise alert msg gösterimi için props tanımı
    if (text === '') {
      alertContext.setAlert('Please enter something to search...', 'is-danger');
    } else {
      githubContext.searchUsers(text);
      //App.js gönderdikten sonra input alanının temizlenmesi
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='field'>
          <p className='control has-icons-left'>
            <input
              className='input is-primary is-rounded'
              type='text'
              name='text'
              placeholder='Search users...'
              value={text}
              onChange={onChange}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-search'></i>
            </span>
          </p>
        </div>
        <div className='field'>
          <button
            className={`button is-primary is-rounded is-fullwidth ${
              githubContext.buttonLoading && 'is-loading'
            }`}>
            Search
          </button>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className='field mt-3'>
          <button
            className='button is-warning is-light is-rounded is-fullwidth'
            onClick={githubContext.clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
