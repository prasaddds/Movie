import React from "react";
import Card from "./Card";
import contacts from "./Contact";
function createCard(contact)
{
    return <Card 
    key={contact.id}
    name={contact.name}
    director={contact.director}

    hero={contact.hero}
    heroName={contact.heroName}
    heroine={contact.heroine}
    heroineName={contact.heroineName}
    rating={contact.rating}
    imgURL={contact.imgURL}
/>
}
function App() {
 return (
 <div>
 {contacts.map(createCard)}
 </div>
 );
}
export default App;