const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const myData = [
  'JXSH',
  'GG',
  'TRILLIONAIRE',
  '23',
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions [genRandomInt(2)]
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function PersonalData() {

  const myData = [
  'JXSH',
  'GG',
  'TRILLIONAIRE',
  '23',
  ];
  return(
    <div>
      <h2>Nombre: {myData [0]}</h2>
      <h2>Apellido: {myData [1]}</h2>
      <h2>Quien Soy? {myData [2]}</h2>
      <h2>Edad: {myData [3]}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;