const about = () => {
  return (
    <section className="container mx-auto md:h-screen h-100 bg-green-100 flex flex-col-reverse md:flex-row items-center">
      <div className="w-96 md:w-1/2">
        <img src={require("../assets/person1.png")} alt="person1" />
      </div>
      <div className="w-96 md:w-1/2">
        <h2>Cine suntem?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta
          itaque laboriosam officiis odit. Tempore saepe enim nemo. Voluptas,
          modi Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Distinctio inventore architecto explicabo enim repudiandae minima quis
          qui voluptatibus accusamus minus.
        </p>
        <h4>Ce putem face!</h4>
        <ul>
          <li>putem face asta</li>
          <li>putem face asta</li>
          <li>putem face asta</li>
          <li>putem face asta</li>
          <li>putem face asta</li>
        </ul>
        <button type="button">Aplica aici</button>
      </div>
    </section>
  );
};

export default about;
