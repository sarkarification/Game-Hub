import ShowGame from "./showGame";

function ShowGames(props) {
  return (
    <div className="games">
      {props.products &&
        props.products.map((game, index) => {
          if (index === props.products.length - 1)
            return (
              <ShowGame
                key={index}
                id={game.id}
                image={game.image}
                value={game.price}
                title={game.title}
                handleDelete={props.handleDelete}
              />
            );
          else
            return (
              <div key={index}>
                <ShowGame
                  id={game.id}
                  image={game.image}
                  value={game.price}
                  title={game.title}
                  handleDelete={props.handleDelete}
                />
                <div className="separator"></div>
              </div>
            );
        })}
    </div>
  );
}

export default ShowGames;
