import React, { useEffect } from 'react';
import '../styles/Frontpage.css'
import natureImage from '../images/nature123.jpg';

function FrontPage() {
  // useEffect for animating text on the front page
  useEffect(() => {
    const text = document.querySelector('.text');
    const letters = text.textContent.split('');
    text.textContent = '';
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i * 30}ms`;
      text.appendChild(span);
    });
  }, []);

  return (
    <main role="main" className="container">
      {/* Set background image */}
      <div className="background-image" style={{backgroundImage: `url(${natureImage})`}}></div>
      <div className="content">
        {/* Animated text content about climate change */}
        <h1 className="text">
        Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas.
        Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures.
        Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and forests can also release carbon dioxide. Landfills for garbage are a major source of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main emitters.

        And emissions continue to rise. As a result, the Earth is now about 1.1°C warmer than it was in the late 1800s. The last decade (2011-2020) was the warmest on record.
        Many people think climate change mainly means warmer temperatures. But temperature rise is only the beginning of the story. Because the Earth is a system, where everything is connected, changes in one area can influence changes in all others.
        The consequences of climate change now include, among others, intense droughts, water scarcity, severe fires, rising sea levels, flooding, melting polar ice, catastrophic storms and declining biodiversity. These changes are already happening and are expected to become more frequent and intense in the coming decades.

        </h1>
      </div>
    </main>
  );
}

export default FrontPage;