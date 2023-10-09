import React from 'react';
import Navbar from './Navbar';
import styles from './Us.module.css';
import tycho from "./Asset/tycho.jpeg";
import chang from "./Asset/Chang3.jpg";
import chand2 from "./Asset/chandra2.jpg";
import oppo from "./Asset/apollo.jpeg";
import craters from "./Asset/crater.jpg";
import Chanda from "./Asset/Chandrayaan.jpg";

const Us = () => {
  return (
    <>
      <Navbar />
      <section>
        <details open>
          <summary>Tycho Crater</summary>
          <div>
            <img src={tycho} alt="tycho" />
            <p>  The Tycho crater on the moon is a prominent and relatively young impact crater known for its distinctive rays of ejected material that extend across the lunar surface.
            Tycho crater on the moon is scientifically important for its youthful age, approximately 108 million years, and its well-preserved impact features, providing insights into lunar geology and crater formation processes  </p>
          </div>
        </details>

        <details>
          <summary>Chandrayaan 3 & Luna Sites</summary>
          <div>
          <img src={Chanda} alt="Chanda" />
            <p> The Moon’s south pole is about to get some new visitors, as India and Russia are preparing to land their spacecraft in the region rich with water ice.
            ISRO’s Chandrayaan 3 and Roscosmos’ Luna 25 are both aiming to explore the lunar surface and conduct scientific experiments.
            </p>
          </div>
        </details>

        <details>
        <summary>Chang 3</summary>
          <div>
          <img src={chang} alt="Chang" />
            <p>   Chang'e 3 was China's third lunar exploration mission and successfully landed a rover named "Yutu" (Jade Rabbit) on the moon in December 2013, marking a significant milestone in China's space exploration program.
               Chang'e 3 collected crucial lunar data, including surface images, soil composition analysis, topographical information, radiation measurements, environmental data, and observations of lunar soil dynamics, enhancing our understanding of the moon's geology and environment.
               </p>
          </div>
        </details>

        <details>
        <summary>Apollo 11</summary>
          <div>
          <img src={oppo} alt="oppo" />
            <p> 
            Apollo 11 was NASA's historic mission in 1969, during which astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the moon while Michael Collins orbited above.
             This iconic mission marked a monumental achievement in space exploration and fulfilled President John F. Kennedy's goal of landing a man on the moon and returning him safely to Earth. Neil Armstrong's famous words, "That's one small step for man, one giant leap for mankind," were spoken during his historic moonwalk.
            </p>
          </div>
        </details>

        <details>
        <summary>Lunar Craters</summary>
          <div>
          <img src={craters} alt="Craters" />
            <p> 
            The craters in the region have satellite craters, that are identified with a letter. Manzinus has 21 satellite craters, going all the way up to U.
             Boguslavsky has 13 satellite craters, up to N. Russia has narrowed down on a preferred landing location to the north of the Boguslavsky crater, with reserve areas southwest of the Manzini crater and South of the Pentland A crater. 
            </p>
          </div>
        </details>

        <details>
        <summary>Chandrayaan 2</summary>
          <div>
          <img src={chand2} alt="Chandu2" />
            <p> Chandrayaan 2 was India's second lunar exploration mission, launched in July 2019. It consisted of an orbiter, a lander named Vikram, and a rover named Pragyan. While the orbiter continues to study the moon from orbit, the lander's attempt to make a soft landing on the moon's surface was not successful. 
            Nonetheless, the mission represents India's commitment to lunar exploration and scientific research.
            </p>
          </div>
        </details>


      </section>
    </>
  );
};

export default Us;
