import IconSwitch from "./IconSwitch";
import { useState } from 'react';
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store(props) {
  const [viewState, setViewState] = useState('Cards');

  return (
    <div className="Store">
      <header>
        <IconSwitch
          icon={"view_list"}
          onSwitch={() => {
            (viewState === 'Cards') ? setViewState('List') : setViewState('Cards')
            console.log('change state here');
          }}
        />
      </header>
      <section className="shop">
        {(viewState === "List") ? <ListView products={props.products} /> : <CardsView products={props.products} />}
      </section>
    </div>
  );
}

export default Store;
