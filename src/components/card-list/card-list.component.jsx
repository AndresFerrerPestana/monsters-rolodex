import Card from '../../components/card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list" key={monsters.id}>
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
