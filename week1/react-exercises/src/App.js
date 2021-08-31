import HobbyList from "./exercise-1";
import "./App.css";
import Guarantee from "./exercise-2";
import Counter from "./exercise-3";

function App() {
  return (
    <div className="App">
      <div>
        <HobbyList />
      </div>
      <div className="customer-service">
        <Guarantee
          img="https://raw.githubusercontent.com/HackYourFuture/React/master/week1/assets/exercises/f-delivery.png"
          title="Free Shipping"
          description="hfjeidn hfnvh nvhedsowlkm nwlk ksowk ksdok ospklsd lks"
        />
        <Guarantee
          img="https://raw.githubusercontent.com/HackYourFuture/React/master/week1/assets/exercises/coin.png"
          title="100% Money back"
          description="hfjeidn hfnvh nvhedsowlkm nwlk ksowk ksdok ospklsd lks"
        />
        <Guarantee
          img="https://raw.githubusercontent.com/HackYourFuture/React/master/week1/assets/exercises/chat.png"
          title="Online support 24/7"
          description="hfjeidn hfnvh nvhedsowlkm nwlk ksowk ksdok ospklsd lks"
        />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
