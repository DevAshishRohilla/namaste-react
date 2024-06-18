import React from "react";
import ReactDOM from "react-dom/client"

const AppHeader =() => {
    return (
        <header>
            <div class="container">
                <span className="logoBlk">
                    <img alt="Logo" src="https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg"/>
                </span>
                <span className="navBlk">
                    <ul className="nav-lists" style={{display:"flex", gap:"20px"}}>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Food</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item">Cart</li>
                    </ul>
                </span>
            </div>
        </header>
    )
}

const Restcard =() => {
    return (
        <div className="col-3 Card">
            <div className="cardWrap">
                <img className="cardBanner" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
                <div className="CardDetails">
                    <h3 className="resName">Chinese Wok</h3>
                    <div className="ratings">
                        <span className="cardRating">4.2</span>
                        <span className="estDelTime">30-35 mins</span>
                    </div>
                    <div className="cusines">
                        <span>Indian</span>,<span>Italian</span>,<span>Spanish</span>,<span>Chinese</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AppBody =() => {
    return (
        <div class="bodyWrap">
            <div className="searchBanner">
                <div className="container">
                    <input type="search" placeholder="Search Item"></input>
                    <button>Search</button>
                </div>
            </div>
            
            <div className="resList">
                <div className="container">
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                    <Restcard/>
                </div>
            </div>

        </div>
    )
}


const AppMain =()=> {
    return ( 
        <div class="App Main">
            <AppHeader/>
            <AppBody/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain/>);