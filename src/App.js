import './App.css';
import HeroComponent from './components/hero-component/hero.component';
import ProgramsComponent from './components/programs-component/programs-component';
import ReasonsComponent from './components/reasons-component/reasons-component';
import MemershipsComponent from './components/memberships-component/memerships-component';
import ReviewsComponent from './components/reviews-component/reviews-component';
import JoinComponent from './components/join-component/join-component';

function App() {
  return (
    <>
      <HeroComponent />
      <ProgramsComponent />
      <ReasonsComponent />
      <MemershipsComponent />
      <ReviewsComponent />
      <JoinComponent />
    </>
  );
}

export default App;
