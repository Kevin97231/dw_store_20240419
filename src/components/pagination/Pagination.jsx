/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({nbrButton = 5, handleClick}) => {
  
    // Comme j'utilise json server et que je n'ai possibilité de faire de requête 'count' qui me
    // renvoie le nombre total d'élément, je met une valeur par défaut aléatoire à 5.
    // Dans un appli. classique, le parent doit déterminer le nombre de boutons de pagination
    // à afficher en fonction du nombre total d'éléments et du nombre d'éléments affichés par page

    const numbers = Array.from({length: nbrButton}, (_,index) => index + 1);
    // numbers est égale à [1,2,3,4,5]

    return (
    <div className="bg-white join">
      {
        numbers.map(number => 
            // j'aurais pu ne pas utiliser le Fragment et placer la clé
            // directement dans <PaginationButton/>, cela aurait eu le mm
            // effet
            <Fragment key={number}>
                <PaginationButton number={number} handleClick={handleClick}/>
            </Fragment>
        )
      }
    </div>
  );
}