import Button from '../../shared/components/Button/Button';
import useTitleDivision from '../../shared/hooks/useTitleDivision';

export default function HomePage() {
  useTitleDivision('Home');

  return (
    <main>
      You are at the home page <Button>Go</Button>
    </main>
  );
}
