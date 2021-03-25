import SQAppHeader from 'components/app-header';
import SQHome from '@/pages/home';

import { AppWrapper } from './App.style';

export default function App() {
  return (
    <AppWrapper>
      <SQAppHeader />
      <SQHome />
    </AppWrapper>
  );
}
