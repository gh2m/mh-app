import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  return (<form>
    <div>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
    </div>
    <div>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />
    </div>
    <div>
      <label for="phonenum">Phone Number:</label>
       <input type="text" id="phonenum" name="phonenum" />
    </div>
  </form>)
}