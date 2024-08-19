import { Footer } from '@/components/footer';
import Header from '@/components/header';
import Main from '@/components/main';
import DropdownMenu from '@/components/ui/dropdown';

type Props = { children: React.ReactNode };

function RootLayout({ children }: Props) {
  return (
    <section className="flex px-4 min-h-screen flex-col">
      <Header />
      <div className="overflow-hidden  flex-col flex rounded-xl">
        <DropdownMenu />
        <Main>{children}</Main>
      </div>
      <Footer />
    </section>
  );
}

export default RootLayout;
