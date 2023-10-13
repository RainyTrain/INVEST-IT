import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadData } from './asyncThunk/loadData';
import Header from './components/Header';
import List from './components/List';
import { THEME_KEY } from './const/localStorageKeys';
import { useInfiniteScroll } from './useScroll';

const defaultTheme = localStorage.getItem(THEME_KEY) || 'light-mode';

function App() {
  // use class "'dark-mode' to change theme"

  //it's better to create context for handling themes!

  const triggerRef = useRef();
  const wrapperRef = useRef();

  const [theme, setTheme] = useState(defaultTheme);

  const handleTheme = useCallback(() => {
    switch (theme) {
      case 'light-mode':
        setTheme('dark-mode');
        localStorage.setItem(THEME_KEY, 'dark-mode');
        break;
      case 'dark-mode':
        setTheme('light-mode');
        localStorage.setItem(THEME_KEY, 'light-mode');
        break;

      default:
        break;
    }
  }, [theme]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.mainReducer.list);
  const page = useSelector((state) => state.mainReducer.page);

  const onLoadNextPart = useCallback(() => {
    dispatch(loadData({ page: page + 1 }));
    console.log('dispatch');
  }, [dispatch]);

  useInfiniteScroll({
    callback: onLoadNextPart,
    triggerRef,
    wrapperRef,
  });

  return (
    <div ref={wrapperRef} className={`${theme}`}>
      <Header theme={theme} handleTheme={handleTheme} />
      <List data={data} />
      <div className="trigger" ref={triggerRef}></div>
    </div>
  );
}

export default App;
