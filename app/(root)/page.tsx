import FloatingLines from '@/components/FloatingLines';
import TradingViewWidget from '@/components/TradingViewWidget';
import { 
  HEATMAP_WIDGET_CONFIG, 
  MARKET_DATA_WIDGET_CONFIG, 
  MARKET_OVERVIEW_WIDGET_CONFIG, 
  TOP_STORIES_WIDGET_CONFIG 
} from '@/lib/constants';

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <main>

      {/* Background Floating Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <FloatingLines
          enabledWaves={['top', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={false}
          parallax={true}
        />
      </div>

      {/* Widgets Wrapper */}
      <div className="relative z-10 flex flex-col gap-16 p-4">

        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TradingViewWidget
              title="Market Overview"
              scriptUrl={`${scriptUrl}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
          <div className="md:col-span-2">
            <TradingViewWidget
              title="Stock Heatmap"
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              height={600}
            />
          </div>
          <div className="md:col-span-2">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>

      </div>

    </main>
  );
};

export default Home;
