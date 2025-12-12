import Header from '../components/panel/PanelHeader'
import TaskElement from '../components/panel/TaskElement';

export default function Panel() {

  const data = [
    "test data",
    "its bad but trust me bro on this one",
    "i will try my best to fix this as soon as posible",
    "not working on phones? ye i know",
    "did u done your homework?"
  ];

  return(
    <main className="animate-delay-300 animate-fade animate-once animate-ease-out flex items-center justify-center flex-col">
      <Header className=" shadow-md shadow-white/30"/>
        <ul className='list p-8 justify-evenly gap-6 flex flex-row flex-wrap'>
          {data.map((item, index) => (
            <li key={index} className="p-2"><TaskElement title={item}/></li>
          ))}
      </ul>
    </main>
  );
}
