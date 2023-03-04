import React from "react";
import { useState } from "react";

const Nav = (props) => {
const [selected, setSelected] = useState("All");

const handleClick = (type, event) => {
event.preventDefault();
setSelected(type);
props.handleSelectedCategory(type);
};

return (
<div className="pbuttons">
<button
className="pbutton"
onClick={(event) => handleClick("All", event)}
style={{ borderColor: selected === "All" ? "red" : ''}}
>
All
</button>
<button
className="pbutton"
onClick={(event) => handleClick("Decorative", event)}
style={{ borderColor: selected === "Decorative" ? "red" : "" }}
>
Decorative
</button>
<button
className="pbutton"
onClick={(event) => handleClick("Solar Control", event)}
style={{ borderColor: selected === "Solar Control" ? "red" : "" }}
>
Solar Control
</button>
<button
className="pbutton"
onClick={(event) => handleClick("Safety & Security", event)}
style={{ borderColor: selected === "Safety & Security" ? "red" : "" }}
>
Safety & Security
</button>
<button
className="pbutton"
onClick={(event) => handleClick("Automotive", event)}
style={{ borderColor: selected === "Automotive" ? "red" : "" }}
>
Automotive
</button>
</div>
);
};

export default Nav;


