import { ProfileCard } from './components/ProfileCard';
import './App.css';


function App() {
  const profiles = [
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.rBm23K2U0vm8MO73PMh5fwHaEK%3Fpid%3DApi&f=1&ipt=5105dff805dde473d17343e60de78787c32904c42fa7e800dc8459ad7c43f3bb&ipo=images",
      name: "Ben Benson",
      jobTitle: "Game Tester",
      bio: "Prefers Arcade games to RPG."
    },
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.nZDg1eMzQjFw96NKt7diCgHaHa%3Fpid%3DApi&f=1&ipt=65dc0b96322141242779ff11a3ed3883b0bb9abbad628732d1ef3fb69c76b60e&ipo=images",
      name: "Pablo Roso",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications."
    },
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._4-9CwVBey0CSYLEm3FWywHaHa%3Fpid%3DApi&f=1&ipt=ad0cb58de0b988db40b41cc69e9d37955bbfbd3a255a28e20b4f7e1c40226bf9&ipo=images",
      name: "Sam Morrel",
      jobTitle: "QA Engineer",
      bio: "Enjoys swimming."
    }
  ];

  return (
    profiles.map(profile => {
      return (
        <ProfileCard image={profile.image} name={profile.name} jobTitle={profile.jobTitle} bio={profile.bio}/>
      )
    })
  );
}

export default App;
