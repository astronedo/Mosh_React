//Function based components(mostly used)
//pascalCasing
function Message() {
  //JSX: Javascript XML
  const name = "Astro";
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello World!</h1>;
  }
}
export default Message;
