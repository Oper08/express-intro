let express = require('express');
let app = express();

let PORT = 7777;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let cars = [
    { id: 1, model: 'Toyota Camry', onwer: 'Aibek' },
    { id: 2, model: 'Hyunday Sonata', onwer: 'Arujan' },
    { id: 3, model: 'BMW e60', onwer: 'Anuar' },
    { id: 4, model: 'Mercedes-Benz C-Class', onwer: 'Daniyar' },
    { id: 5, model: 'Audi A4', onwer: 'Eldar' },
    { id: 6, model: 'Nissan Altima', onwer: 'Firdavs' },
    { id: 7, model: 'Kia Optima', onwer: 'Gulnara' },
    { id: 8, model: 'Ford Fusion', onwer: 'Hassan' },
    { id: 9, model: 'Chevrolet Malibu', onwer: 'Ilyas' },
    { id: 10, model: 'Volkswagen Passat', onwer: 'Jamilya' }
];

app.use(express.json());

app.get('/cars', (req, res) => {
    res.json(cars);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/cars/:id', (req, res) => {
    let car = cars.find(c => c.id === parseInt(req.params.id)); 
    if (!car) return res.status(404).send('Car not found by ID'); 
    res.json(car);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////







app.get('/cars', (req, res) => {
    let { model, owner, sort } = req.query;

    let filteredCars = cars;
    if (model) {
        filteredCars = filteredCars.filter(car => car.model.toLowerCase().includes(model.toLowerCase()));
    }

    if (owner) {
        filteredCars = filteredCars.filter(car => car.owner === owner);
    }

    if (sort) {
        if (sort === 'asc') {
            filteredCars = filteredCars.sort((a, b) => a.model.localeCompare(b.model));
        } else if (sort === 'desc') {
            filteredCars = filteredCars.sort((a, b) => b.model.localeCompare(a.model));
        }
    }

    res.json(filteredCars);
});

