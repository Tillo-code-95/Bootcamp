import List from "./List"

export default function Shop() {
    const Shop = {
        electronic: [
            {id: 27, name: "Televisor", brand: "LG", model: "XP7302", price: 399},
            {id: 28, name: "Equipo Hi-FI", brand: "Samsung", model: "VF235", price: 179},
            {id: 29, name: "Televisor", brand: "Sony", model: "Bravia-173", price: 498},
        ],
        nutrition: [
            {id: 30, name: "Galletas", brand: "María", price: 0.90},
            {id: 31, name: "Ensalada", brand: "Imizurra", price: 1.30},
            {id: 32, name: "Patatas", brand: "McKain", price: 0.90},
            {id: 33, name: "Pasta", brand: "Gallo", price: 0.90},
        ],
        pets: [
            {id: 34, name: "Croquetas para gato", brand: "Purina", price: 4.90},
            {id: 35, name: "Arena de gato", brand: "Limpior", price: 1.10},
        ]

        
    };

    return(
        <div>
            <List category="electronic" products={Shop.electronic}/>
            <List category="nutrition" products={Shop.nutrition}/>
            <List category="pets" products={Shop.pets}/>
        </div>
    )
}