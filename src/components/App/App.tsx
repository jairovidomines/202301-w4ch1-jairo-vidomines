import Info from "../Info/Info";

const App = (): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
      </section>
    </>
  );
};

export default App;
