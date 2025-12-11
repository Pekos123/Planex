import Header from '../components/panel/PanelHeader'
import TaskElement from '../components/panel/TaskElement';

export default function Panel() {

  const data = [
    "smrth",
    "yea",
    "add that another menu hides when opening another",
    "zuza"];

  return(
    <main className="flex items-center justify-center flex-col">
      <Header className="animation-delay-200 animate-fade animate-once animate-ease-out shadow-md shadow-white/30"/>
       <ul className='list pt-8 gap-4 flex flex-col'>
         {data.map((item, index) => (
           <li key={index}><TaskElement title={item}/></li>
         ))}
       </ul>
    </main>
  );
}
