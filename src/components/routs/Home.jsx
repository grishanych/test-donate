import CategorysList from "../categorysList/CategorysList"
import CardList from "../cardlist/CardList"

function MainPage(){

    const style = {
        "width": "100%",
        "height": "500px",
        "backgroundColor": "green",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "fontSize": "50px",
        "color": "white"
    }

    return (
        <>
            <div style={style}>Тут міг бути ваш слайдер</div>
            <CategorysList />
            <CardList />
        </>
    )
}

export default MainPage