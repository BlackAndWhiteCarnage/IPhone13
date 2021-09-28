import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper } from './Display.styles';

const Display = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={1} variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        <Wrapper>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem harum nisi temporibus a officiis optio, incidunt facilis
          reprehenderit? Voluptate quos dolor eaque tenetur maiores ullam dolores at maxime optio nobis. Id, qui? Earum assumenda, quidem laborum
          dicta eum dolorem labore in provident dolorum itaque saepe, accusamus reprehenderit aspernatur! Quod porro fugiat odio officia consequuntur
          suscipit eos fuga provident itaque aliquid. Veniam laudantium corrupti ut in eveniet necessitatibus sequi officiis officia! Quod temporibus
          minima, voluptate ex veniam quaerat exercitationem. Deleniti incidunt libero nesciunt voluptate necessitatibus optio velit repellat
          consequatur officiis suscipit. Non iusto voluptatibus dolores architecto, similique error voluptatem numquam, enim accusamus expedita a
          fugiat fuga ipsa quae praesentium doloremque suscipit, ad deserunt ut rem! Excepturi neque commodi blanditiis a ipsam. Consectetur quam
          impedit omnis iste debitis, repellat perferendis facilis maiores aperiam, voluptate sed officia nobis voluptas modi sequi dolorum
          laudantium! Natus exercitationem nostrum, consequatur laudantium doloremque aut culpa vel blanditiis? */}
        </Wrapper>
      </SectionWrapper>
    </>
  );
};

export default Display;
