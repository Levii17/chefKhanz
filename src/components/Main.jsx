import { useState } from 'react';

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    
    const listOfIngredients = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }
    
    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label="add ingredient" placeholder="e.g. Avocado"
                    name="ingredient"
                />
                <button> Add Ingredient</button>
            </form>
            <ul>
                {listOfIngredients}
            </ul>
        </main>
    )
}