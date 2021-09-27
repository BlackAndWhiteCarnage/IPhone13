import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import Home from './Home/Home';
import Display from './Display/Display';
import Camera from './Camera/Camera';
import Battery from './Battery/Battery';

const AllSlides = ({ setSectionIndex, sectionIndex }) => {
  const slides: ISlideConfig[] = [
    {
      content: <Home setSectionIndex={setSectionIndex} />,
    },
    {
      content: <Display setSectionIndex={setSectionIndex} />,
    },
    {
      content: <Camera setSectionIndex={setSectionIndex} />,
    },
    {
      content: <Battery setSectionIndex={setSectionIndex} />,
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
