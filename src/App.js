import React, { useState } from "react";
import Button from "./components/Button";
import axios from "axios";

/**
 * App - the main application component.
 *
 * Holds all the state and logic to make our application work!
 *
 * @returns the App component
 */
const App = () => {
  /**
   * Holds the zoom data statefully using the useState Hook.
   */
  const [zoomData, setZoomData] = useState();

  /**
   * Keeps track of the fetching of the zoom data, a simple boolean.
   */
  const [isFetchingZoomData, setFetchingZoomData] = useState(false);

  /**
   * A function to hold all the logic to fetch data from our own api backend.
   *
   * Notice the async declaration before the function brackets - this silently inkoves
   * ES6 promises under the hood to help us out without us worrying about the details!
   */
  const fetchZoomData = async () => {
    /**
     * Whilst we're fetching the data, inform the application that we are currently fetching.
     */
    setFetchingZoomData(true);

    /**
     * Get our zoom data using axios. Notice the async/await combo used here...
     * an inline style with full promises!
     */
    const response = await axios.get(`/api/zoom`);

    /**
     * Place the response data payload into our zoom data state.
     */
    setZoomData(response.data.payload);

    /**
     * Now that all is said and done... we're no longer fetching! Inform the state accordingly.
     */
    setFetchingZoomData(false);
  };

  /**
   * Our button and response text is wrapped up in a React fragment (<></>)... remember, you can
   * only return one child from a react component.
   *
   * Here, we're using our button and then just printing the JSON response in a HTML paragraph tag (<p>)
   */
  return (
    <>
      <Button
        handleClick={fetchZoomData}
        loading={isFetchingZoomData}
        text="Make Zoom Meeting"
      />
      <p>{JSON.stringify(zoomData)}</p>
    </>
  );
};

export default App;
