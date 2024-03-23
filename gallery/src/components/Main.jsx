import React from "react"
import "./Main.css"

function Main(props){
  console.log(props)

  const { data } = props;
console.log(data)
    return (
      <main>
        <div className="img">
          {data.map((i) => (
            <div>
              <img className="img-item" src={i.src.large} alt="flower" />
              <p>📸: {i.photographer}</p>
            </div>
          ))}
        </div>

        <div className="par">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            repellat veniam alias, impedit nisi magnam!
          </p>
        </div>
      </main>
    );
}

export default Main