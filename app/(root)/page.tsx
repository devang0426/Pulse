import FloatingLines from '@/components/FloatingLines';

const Home = () => {
  return (
    <main>
      
        <div className="z-10 flex items-center justify-center min-h-screen">
  Home
</div>

        <div className="absolute top-0 left-0 w-full h-full">
          <FloatingLines
            enabledWaves={['top', 'bottom']}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[10, 15, 20]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
      
    </main>
  );
};

export default Home;
