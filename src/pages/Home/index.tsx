import MasterPage from '../../components/MasterPage';
import Button from '../../components/Button';

function Home() {
  return (
    <MasterPage>
      <h1>Stolen Bike Index</h1>

      <Button href="/404">
        Click Here
      </Button>
    </MasterPage>
  );
}

export default Home;
