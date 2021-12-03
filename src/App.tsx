import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #74b9ff;
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a{
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}
input {
  all: unset;
  appearance: none;
  box-sizing: border-box;
}


.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.toDoList__header {
  font-size: 100px;
}

.category__select {
  text-align: center;
  border-color: #74b9ff;
  width: 10vw;
  height: 5vh;
  border-radius: 20px;
  margin-bottom: 30px;
  font-size: xx-large;
  cursor: pointer;
}

.formBtn {
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  text-align: center;
  color: white;
  border-radius: 20px;
  background-color: #04aaff;
  border-color: #04aaff;
  cursor: pointer;
  margin-top: 15px;
}

.formInput {
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #74b9ff;
  text-align: center;
  background-color: white;
  color: black;
}

.todo {
  margin-top: 40px;
  font-size: 40px;
  ::marker {
    color: #74b9ff;
  }
  button {
    color: white;
    cursor: pointer;
    background-color: #74b9ff;
    border: 1px solid #74b9ff;
    margin-right: 10px;
    height: 5vh;
    width: 5vw;
    font-size: 20px;
  }
}

.todo__span {
  margin-right: 20px;
  
}
.todo__delete {
  cursor: pointer;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
