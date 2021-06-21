function Cars() {
    const cars = ['vaz', 'zaz', 'gaz', 'uaz', 'bmw'];

    // const carsList = [];
    // for (let car of cars) {
    //     carsList.push(<li>{car}</li>)
    // }

    // const carsList = cars.map((car) => {
    //     return <li>{car}</li>
    // })
    const carsList = cars.map((car) => <li>{car}</li>);

    const numbers = [];
    for (let i = 0; i < 4; i++) {
        numbers.push(<li>{i}</li>);
    }

    return (
        <div>
            <ul>
                {carsList}
            </ul>
            <ul>
                {cars.map((car) => {
                    return <li>{car}</li>
                })}
            </ul>
            <ul>
                {numbers}
            </ul>
        </div>
    )
}

export default Cars;