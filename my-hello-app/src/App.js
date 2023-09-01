import componentsLogo from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67.png';
import singleLogo from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706e67.png'
import jsxLogo from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706e67.png'
import decLogo from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png'
import './App.css';



function App() {
  return (
    <div className="app">
  
    <div className = "topBox">
    
    <div className="sayHelloBox">
    <h1> Say hello to ReactJS</h1>


    <p className= "topDescription"> You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
    
  
            <button type="button" class="btn btn-light btn-lg">Awesome!</button>
  
     
  
  </div>
    </div>
      <ul>

        <div className="box">
          <div className="section">
            <img src= {decLogo} alt="decLogo" />
            <h3> Declarative </h3>
            <p> React makes it painless to create interatcive UIs.</p>
          </div>
 
          <div className="section">
            <img src={componentsLogo} alt="componentsLogo" />
            <h3> Components </h3>
            <p> Build encapsulates components that manage their own state.</p>
          </div>

          <div className="section">
            <img src= {singleLogo} alt="singleLogo" />
            <h3> Single-Way </h3>
            <p> A set of immutable values are passed to the components.</p>
          </div>

          <div className="section">
            <img src= {jsxLogo} alt="jsxLogo" />
            <h3> JSX </h3>
            <p> Statistically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </ul>
       
    </div>

  );
}

export default App;
