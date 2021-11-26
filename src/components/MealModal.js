import '../styles/MealModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const MealModal = ({ mealInfo, setModalVisible }) => {

    return (

        <div className="modal-backdrop">
            <FontAwesomeIcon icon={faTimes} size="2x" className="close-btn" onClick={() => setModalVisible(false)} />
            <div className="modal-container">
                <div className="modal-img-container">
                    <img src={mealInfo.strMealThumb} alt="meal picture" />
                </div>
                <h2 className="meal-title">{mealInfo.strMeal}</h2>
                <div className="meal-info">
                    <span className={`food-icon ${ mealInfo.strCategory }`} title={mealInfo.strCategory}></span><span className={`flag ${ mealInfo.strArea }`} title={mealInfo.strArea}></span>
                </div>
                <h3 className="ingredients-title">What You'll Need:</h3>
                <div className="ingredients-container">
                    <ul>
                        {mealInfo.strIngredient1 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient1}</span> <span className="measure1">{mealInfo.strMeasure1}</span></li>}
                        {mealInfo.strIngredient2 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient2}</span> <span className="measure1">{mealInfo.strMeasure2}</span></li>}
                        {mealInfo.strIngredient3 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient3}</span> <span className="measure1">{mealInfo.strMeasure3}</span></li>}
                        {mealInfo.strIngredient4 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient4}</span> <span className="measure1">{mealInfo.strMeasure4}</span></li>}
                        {mealInfo.strIngredient5 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient5}</span> <span className="measure1">{mealInfo.strMeasure5}</span></li>}
                        {mealInfo.strIngredient6 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient6}</span> <span className="measure1">{mealInfo.strMeasure6}</span></li>}
                        {mealInfo.strIngredient7 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient7}</span> <span className="measure1">{mealInfo.strMeasure7}</span></li>}
                        {mealInfo.strIngredient8 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient8}</span> <span className="measure1">{mealInfo.strMeasure8}</span></li>}
                        {mealInfo.strIngredient9 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient9}</span> <span className="measure1">{mealInfo.strMeasure9}</span></li>}
                        {mealInfo.strIngredient10 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient10}</span> <span className="measure1">{mealInfo.strMeasure10}</span></li>}
                        {mealInfo.strIngredient11 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient11}</span> <span className="measure1">{mealInfo.strMeasure11}</span></li>}
                        {mealInfo.strIngredient12 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient12}</span> <span className="measure1">{mealInfo.strMeasure12}</span></li>}
                        {mealInfo.strIngredient13 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient13}</span> <span className="measure1">{mealInfo.strMeasure13}</span></li>}
                        {mealInfo.strIngredient14 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient14}</span> <span className="measure1">{mealInfo.strMeasure14}</span></li>}
                        {mealInfo.strIngredient15 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient15}</span> <span className="measure1">{mealInfo.strMeasure15}</span></li>}
                        {mealInfo.strIngredient16 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient16}</span> <span className="measure1">{mealInfo.strMeasure16}</span></li>}
                        {mealInfo.strIngredient17 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient17}</span> <span className="measure1">{mealInfo.strMeasure17}</span></li>}
                        {mealInfo.strIngredient18 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient18}</span> <span className="measure1">{mealInfo.strMeasure18}</span></li>}
                        {mealInfo.strIngredient19 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient19}</span> <span className="measure1">{mealInfo.strMeasure19}</span></li>}
                        {mealInfo.strIngredient20 && <li className="ingredient"><span className="ingredient1">{mealInfo.strIngredient20}</span> <span className="measure1">{mealInfo.strMeasure20}</span></li>}
                    </ul>
                </div>
                <h3 className="instructions-title">How To Cook:</h3>
                <div className="instructions-container">
                    <p className="instructions">
                        {mealInfo.strInstructions}
                    </p>
                </div>
                <h3 className="buon-appetito">Buon Appetito!</h3>
                <div className="video">
                    <iframe className="video" id="player" type="text/html" width="640" height="390" src={`https://www.youtube.com/embed/${ mealInfo.strYoutube && mealInfo.strYoutube.slice(32) }`} frameBorder="0"></iframe>
                </div>
                <div className="recipe-source">
                    {mealInfo.strSource && <a href={mealInfo.strSource} target='_blank'>Recipe Source</a>}
                </div>
            </div>
        </div >

    );
}

export default MealModal;