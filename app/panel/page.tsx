import Header from '../components/panel/PanelHeader'
import TaskElement from '../components/panel/TaskElement';

export default function Panel() {

  const data = [
    "test data",
    "its bad but trust me bro on this one",
    "i will try my best to fix this as soon as posible",
    "not working on phones? ye i know",
    "did u done your homework?",
    "add responsive for mobile and midium then delete this data",
  ];

  return(
    <main className="animate-delay-300 animate-fade animate-once animate-ease-out flex items-center justify-center flex-col">
      <Header className="shadow-md shadow-white/30"/>
        <ul className='py-8 list justify-items-center gap-6 max-sm:gap-4 w-[80%] grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1'>
          {data.map((item, index) => (
            <li key={index} className=""><TaskElement title={item}/></li>
          ))}
      </ul>
    </main>
  );
}
