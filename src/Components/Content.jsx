import React from 'react'
import Card from './Card'

function Content() {
  return (

    <div className="container p-5 mt-5">
        <h1 className="text-center">ARTISTES</h1>
      <div className="row">
        
            <Card
                img="./imagess/blacko.jpg"
                title="Black Sheriff"
                desc="Mohammed Ismail Sharrif professionally known as Black Sherif, is a Ghanaian singer and rapper. He gained popularity in 2021 with his song 'First Sermon' in May 2021. This was followed up with 'Second Sermon' in July."
             />
             <Card
                img="./imagess/asak.jpg"
                title="Asake"
                desc="Ahmed Ololade, known professionally as Asake, is a Nigerian Afrobeats singer and songwriter. He is signed to YBNL Nation and Empire Distribution. His stage name pays homage to his mother, whose first name is Asake."
             />
             <Card
                img="./imagess/fire.jpg"
                title="Fireboy DML"
                desc="Adedamola Adefolahan, known professionally as Fireboy DML, is a Nigerian singer. He is signed to YBNL Nation, a record label founded by Nigerian rapper Olamide. His debut studio album Laughter, Tears and Goosebumps was released in 2019."
             />
             <Card
                img="./imagess/kl.jpg"
                title="Kendrick Lamar"
                desc="Kendrick Lamar Duckworth is an American rapper and songwriter. Known for his progressive musical styles and socially conscious songwriting, he is often considered one of the most influential hip hop artists of his generation."
             />
        
        
      </div>
    </div>

  )
}

export default Content
