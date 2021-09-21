import React from "react";
import "../style/Activities.css";
import ActivitiesCard from "./ActivitiesCard";
function Activities() {
  return (
    <div className='activities__container'>
      <h1>Découvrez des activités</h1>
      <div className='activities__cards'>
        <ActivitiesCard
          url='https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480'
          titre='Expériences'
          p='Trouvez des activités inoubliables dans les environs'
        />
        <ActivitiesCard
          url='https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480'
          titre='Expériences'
          p='Trouvez des activités inoubliables dans les environs'
        />
        <ActivitiesCard
          url='https://a0.muscache.com/im/pictures/3c2676df-0874-45a3-a82f-bbf57ccde1cc.jpg?im_w=480'
          titre='Expériences'
          p='Trouvez des activités inoubliables dans les environs'
        />
      </div>
    </div>
  );
}

export default Activities;
