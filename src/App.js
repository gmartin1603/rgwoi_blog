import { useEffect } from "react";
import { Outlet,} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { useStateValue } from "./context/stateProvider";
import useCollListener, { getData, writeData } from "./firebase/firestore";



function App() {

  const [state, dispatch] = useStateValue()

  useCollListener()
  // useEffect(() => {
  //   writeData("routes", {
  //       label: "Reviews",
  //       order: 5,
  //       options: [
  //           {
  //               title: "The best cooling system tool I didn't know I needed",
  //               url: "vaccum+filling+the+cooling+system",
  //               subtitle: "My only regret was not buying one sooner",
  //               author: "Country Coder",
  //               bio: "Always reach higher",
  //               img: 'https://lh3.googleusercontent.com/pp00EhYg2Oxov0UW06yJIDARIT_1DaiP2cOHikpbgtYNamfEkM--mBSPeftn1Giz6pWaEIr51LkM7X7qUF7smhtD-CbPXv5xlQbVN0fO6QP16zBlrZJkxItHN5OTrVD_Grdh_yv7pg=w2400',
  //               date: (1642355907728 + (((24 * 60 * 60 * 1000) * 7) * 2)),

  //           },
  //           {
  //               title: "Serpentine Belt Tentioner Wrench",
  //               url: "serpentine+belt+tentioner+wrench",
  //               subtitle: "My only regret is not buying one sooner",
  //               author: "Country Coder",
  //               bio: "Always reach higher",
  //               img: 'https://lh3.googleusercontent.com/kO1orN_9AcnbG3yTNUkfFLSe3Gd7f0NR2PbojzZsOsqjbNoFQKuxUSNsmakZsNCRU_DN1V6jctoYzEImgjKwcVvLuL4naGVkUrvPJB7hckMxSPHHV-v8CxpoZfSqJiBHagPuKlWt1w=w2400',
  //               date: (1642355907728 + ((24 * 60 * 60 * 1000) * 7)),
  //           },
  //           {
  //             title: "Duramax Harmonic Balancer Removal Kit",
  //             url: "duramax+harmonic+balancer+removal+kit",
  //             subtitle: "Made simple work of a daunting task",
  //             author: "Country Coder",
  //             bio: "Always Reach Higher",
  //             img: 'https://lh3.googleusercontent.com/QCg6K0dPt3w_t8Y8kHgeF9C_WFFUVMwoCuhdqnXHMHoXd0vL6WeS0GKHT0QST50jRVXffvlE4Y8wsaPyAbpBxFZzzZ6E-SOJ-DfIDJmnFJ5SuR5lLZB2SIz4S_ome2jvFCDEpY55Rw=w2400',
  //             date: (1642355907728 + ((24 * 60 * 60 * 1000) * 7)),
  //           },

  //       ],
  //       url: '/reviews',
  //       subtitle: 'Reviews of specialty tools and products I use in the shop',
  //       date: (1642355907728 + (((24 * 60 * 60 * 1000) * 7) * 2)),
  //       img:'https://lh3.googleusercontent.com/PPfUIV03ZHv5pI3bZ7kcAy8yTVENlG_AfaT_0ODGW3naxYF3e-6BW72-u6AF777EAYZbT3VbnnPHyry6BXdSmrupLjYNh2Hs3FCuLn-wzue2JskTtvShgadeawXHKx7aVjbNuCgMtg=w2400',
  //   })
  // },[])


  return (
    <Main>
      <Header/>
      <Container>
        <Outlet/>
      </Container>

    </Main>
  )
}

export default App;

const Main = styled.div`
background-color: #00A36C;
width: 100vw;
min-height 100vh;

`
const Container = styled.div`
font-family: 'IBM Plex Serif', serif;
`