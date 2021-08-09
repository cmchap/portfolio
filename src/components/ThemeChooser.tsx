import * as React from "react";

// interface Props {
//     // theme: string;
// };

const ThemeChooser = (): JSX.Element => {

    function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
        var val = e.target.value;
        console.log(val);
        var sheetToBeChanged = document.getElementById("custom-stylesheet");
        
        if (sheetToBeChanged !== null) {
            sheetToBeChanged.setAttribute("href", `css/${val}`);;
          } else {
            console.error(`Cannot find the custom stylesheet to be changed`);
          }
        
    }
    
    return (
        <div className="c-style-chooser">
            <label className="c-style-chooser__label" htmlFor="pet-select"
            >Style this website:</label
            >
            <select
                name="style"
                className="c-style-chooser__select"
                // value={"red.css"}
                onChange={handleThemeChange}
            >
                <option value="red.css">Red</option>
                <option value="none.css">No Style</option>
            </select>
        </div>
    );
}
  
export default ThemeChooser;