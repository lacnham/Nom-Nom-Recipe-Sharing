import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import styles from '../styles/AllRecipePage/AllRecipe.module.css';
import SearchBar from '../components/SearchBar';
import { Button1 } from '../components/Button';

const AllRecipe = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState([]);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [data, searchInput]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipe`);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const Card = lazy(() => import('../components/Card'));

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Hello</h1>
              <input
                autoFocus
                placeholder="Type..."
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {filteredData.length === 0 ? (
                <div className={styles.noResultsFound}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnTCjL_7-pIzDQg2W30Vy1wdTNuy8zYAP8A&usqp=CAU"
                    alt=""
                  />
                  <h2>Can&#8217;t find a recipe? </h2>
                  <div>
                    <p>
                      Be the first and share your own. Join the fun and help
                      your fellow cooks!
                    </p>
                  </div>
                  <Button1
                    icon={<i className={'fa-solid fa-utensils'}></i>}
                    options={'Add recipe'}
                  />
                </div>
              ) : (
                <div>
                  <div className={styles.cardContainer}>
                    {filteredData.map((item) => (
                      <div key={item.recipe_id}>
                        <Suspense
                          fallback={
                            <div className={styles.cardLazyLoading}></div>
                          }
                        >
                          <Card
                            image={item.image_link}
                            title={item.name}
                            category={['asd', 'asd1', 'asd2']}
                            location="Downtown, Seattle WA"
                            description={item.description}
                          />
                        </Suspense>
                      </div>
                    ))}
                    {/* space holder */}
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipe;
