import '../styles/MealModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const MealModal = ({ mealInfo, setModalVisible }) => {

    return (

        <div className="modal-backdrop">

            <FontAwesomeIcon icon={faTimes} size="2x" className="close-btn" onClick={() => setModalVisible(false)} />
            <div className="modal-container">
                <svg className="svg-background-modal-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f54e59" fillOpacity="0.2" d="M0,256L48,224C96,192,192,128,288,90.7C384,53,480,43,576,53.3C672,64,768,96,864,90.7C960,85,1056,43,1152,48C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>

                <div className="modal-img-container">
                    <img src={mealInfo.strMealThumb} alt="meal" />
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
                    <iframe className="video" title="video" id="player" type="text/html" width="640" height="390" src={`https://www.youtube.com/embed/${ mealInfo.strYoutube && mealInfo.strYoutube.slice(32) }`} frameBorder="0"></iframe>
                </div>
                <div className="recipe-source">
                    {mealInfo.strSource && <a href={mealInfo.strSource} target='_blank' rel="noreferrer">Recipe Source</a>}
                </div>
                <div className="modal-bottom-container">
                    <svg className="svg-background-modal-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f54e59" fillOpacity="0.2" d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,224C672,213,768,235,864,245.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

        </div >

    );
}

export default MealModal;