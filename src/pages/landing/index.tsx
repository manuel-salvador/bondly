import MainLayout from '@/layouts/MainLayout';
import Lottie from 'react-lottie';
import animationData from '@/lotties/data-management.json';
import TeamCard from '@/components/TeamCard';
import FAQS from '@/components/FAQS';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Home() {
  return (
    <MainLayout>
      <section className="flex gap-6 flex-col-reverse md:flex-row items-center">
        <div className="text-white w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8">
          <h1 className="text-3xl md:text-5xl font-bold">W3B Manager</h1>
          <p className="text-xl md:text-2xl">
            Project management got better with blockchain. Data storage, traceability, and data veracity are ensured through an
            auditable database at all times.
          </p>
        </div>
        <div className="pointer-events-none">
          <Lottie options={defaultOptions}></Lottie>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 mt-10 mb-20 gap-8">
        <div className="bg-primary/20 p-6 rounded-md">
          <h4 className="text-lg font-semibold mb-2">New Projects</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, em ad excepturi laboriosam magni vero!</p>
        </div>
        <div className="bg-primary/10 p-6 rounded-md">
          <h4 className="text-lg font-semibold mb-2">Dashboard</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, em ad excepturi laboriosam magni vero!</p>
        </div>
        <div className="bg-primary/20 p-6 rounded-md">
          <h4 className="text-lg font-semibold mb-2">Management</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, em ad excepturi laboriosam magni vero!</p>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-2xl mb-6">Team</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-12">
          <TeamCard
            name="Solange Rodríguez S."
            img="https://bondly.ar/images/team/solange.jpg"
            role="Tech Entrepeneur / BizDev"
          />
          <TeamCard
            name="Mariano Davo"
            img="https://bondly.ar/images/team/mariano.jpg"
            role="Web3 Lawyer / Intellectual Property"
          />
          <TeamCard
            name="Santiago Gonzalez R."
            img="https://bondly.ar/images/team/santiago.jpg"
            role="Administration / Process Analist"
          />
          <TeamCard name="José Sosa" img="https://bondly.ar/images/team/jose.jpg" role="Blockchain Engineer" />
          <TeamCard
            name="Manuel Salvador"
            img="https://lh3.googleusercontent.com/a/AAcHTtd2Aj6QNh9vZyM5ALtxtiXxUbuGUc6xwnclNe2MaYoz3rY=s360-c-no"
            role="Frontend Developer"
          />
          <TeamCard name="Nahuel Suárez Martinez" img="https://bondly.ar/images/team/nahuel.jpg" role="Engineer / Researcher" />
        </div>
      </section>
      <FAQS />
    </MainLayout>
  );
}
