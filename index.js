const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like" buttonText="Like" />
        <Button className="comment" buttonText="Comment" />
        <Button className="share" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
