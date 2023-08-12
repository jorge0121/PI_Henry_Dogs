import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../../redux/actions/index";
import styles from "./DogDetail.module.css";


export default function DogDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
    return () => dispatch(deleteDetails());
  }, [dispatch, props.match.params.id]);

 const myDog = useSelector((state) => state.details);

  return (
    <Fragment>
      {myDog ? (
        <div key={myDog.id} className={styles.bodix}>
          <div className={styles.mainContainer}>
          <div className={styles.detailsContainer}>
            <br />
              <div className={styles.temperament}>
               
              </div>
              {myDog.breed_group ? (
                
                  
                  <div className={styles.infoSection}>
                    <h3>Breed group: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                
              ) : (
                ""
              )}
          
               
                <div className={styles.infoSection}>
                  <h3>Life span: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              
              </div>
           <div> 
            <h2 className={styles.mainTitle}>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className={styles.image} />
            {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                  </div>
           
              <div className={styles.detailsContainer2}>
              
                
                <div className={styles.infoSection}>
                  <h3>Weight: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              
              
                <div className={styles.infoSection}>
                  <h3>Height: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
            
            
          </div>
            <Link to="/home">
              <button className={styles.button}>Back</button>
            </Link>
              </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
}
