import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import Home from './Home/Home';
import Home2 from './Home2/Home2';

const AllSlides = ({ setSectionIndex, sectionIndex }) => {
  const slides: ISlideConfig[] = [
    {
      content: <Home setSectionIndex={setSectionIndex} />,
    },
    {
      content: <Home2 setSectionIndex={setSectionIndex} />,
    },
    {
      content: <Home setSectionIndex={setSectionIndex} />,
    },
  ];
  return (
    <PageSlides
      enableAutoScroll={true}
      transitionSpeed={1000}
      slides={slides}
      parallax={{
        offset: 0.6,
        type: SlideParallaxType.reveal,
      }}
    />
  );
};

export default AllSlides;
