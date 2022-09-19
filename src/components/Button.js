import React from "react";

/**
 * Button - A simple button with a loading state.
 *
 * @param {function} handleClick - a function to attatch to the onClick event of the container div.
 * @param {boolean} loading - a boolean to determine if the button is in a loading state or not.
 * @param {string} text - the text to display within the button if it is not in a loading state.
 * @returns
 */

/**
 * The button accepts properties (called props) which inform how the button should behave given the
 * application state.
 *
 * Notice that the button itself contains no logic or state - it just responds to the props it is given.
 * This is called "lifting state up", such that only the main App component is in charge of all the app state.
 */
const Button = ({ handleClick, loading, text }) => {
  /**
   * Returning a div (the division HTML tag) gives a container to house our button
   */
  return (
    <div
      /**
       * Attach the handle click function passed as a prop to the onClick handler of the HTML div.
       */
      onClick={handleClick}
      /**
       * Some basic styling for our button...
       *
       * Notice how we can use the `loading` boolean prop to inform the styling of the button:
       * - If the button is loading, the background color is grey, or else light grey
       * - If the button is loading, the border is darkgrey, or else grey.
       *
       * The `loading ? "darkgrey" : "grey"` part is just shorthand for a functional `if` statement.
       */
      style={{
        width: "12em",
        backgroundColor: loading ? "grey" : "lightgrey",
        border: "0.1em solid",
        borderRadius: "0.2em",
        borderColor: loading ? "darkgrey" : "grey",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <div
        /**
         * The inner div is styled to have some padding to make our button look bigger and have a nice font!
         *
         * We can use the boolean 'loading' prop once again here to change the text that's displayed:
         * - If the button is loading, display "Loading...", else display the text prop.
         */
        style={{ padding: "1em", fontFamily: "monospace" }}
      >
        {loading ? "Loading..." : text}
      </div>
    </div>
  );
};

/**
 * Here we are exporting our button from the JS file to allow us to use it elsewhere!
 */
export default Button;
