import './App.css';
import LoadingComponent from './components/loading-component/loading-component';
import HeroComponent from './components/hero-component/hero.component';
import ProgramsComponent from './components/programs-component/programs-component';
import ReasonsComponent from './components/reasons-component/reasons-component';
import MemershipsComponent from './components/memberships-component/memerships-component';
import ReviewsComponent from './components/reviews-component/reviews-component';
import JoinComponent from './components/join-component/join-component';
import FooterComponent from './components/footer-component/footer-component';
import { useState } from 'react';

function App() {
  const [hasEntered, setEntered] = useState(false);

  const handleUserEntered = (bool) => {
    setEntered(bool);
  }
  return (
    <div className='App'>
      {hasEntered ?
        <>
          <HeroComponent />
          <ProgramsComponent />
          <ReasonsComponent />
          <MemershipsComponent />
          <ReviewsComponent />
          <JoinComponent />
          <FooterComponent />
        </> :
        <LoadingComponent hasUserEntered={handleUserEntered} />
      }

    </div>
  );
}

export default App;
