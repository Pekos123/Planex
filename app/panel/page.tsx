import Header from '../components/panel/PanelHeader'
import TaskElement from '../components/panel/TaskElement';

export default function Panel() {

  const data = [
    "smrth",
    "yea",
    "add that another menu hides when opening another",
    "zuza",
    "u can add like dropdown to up and down",
    "and the middle one is chosed one",];

  return(
    <main className="animate-delay-300 animate-fade animate-once animate-ease-out flex items-center justify-center flex-col">
      <Header className=" shadow-md shadow-white/30"/>
      <ul className='list p-8 justify-evenly gap-4 flex flex-row flex-wrap'>
        {data.map((item, index) => (
          <li key={index}><TaskElement title={item}/></li>
        ))}
      </ul>
    </main>
  );
}
