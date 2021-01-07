import MasterPage from '../../components/MasterPage';
import Button from '../../components/Button';

function Home() {
  return (
    <MasterPage>
      <Button href="/404">
        Click Here
      </Button>
    </MasterPage>
  );
}

export default Home;
