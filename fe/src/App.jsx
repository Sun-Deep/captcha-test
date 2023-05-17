import { useRef } from "react";
import axios from "axios";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    const inputVal = await e.target[0].value;

    captchaRef.current.reset();

    axios
      .post("http://localhost:4000/captcha-test", {
        inputVal,
        token,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <ReCAPTCHA
          sitekey="6Ldj1f4lAAAAAAWnnNOaBDOLrEpexLn4SlaNXyeT"
          onChange={() => {}}
          ref={captchaRef}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
