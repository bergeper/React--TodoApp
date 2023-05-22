import './Heading.scss';

interface IHeading {
  heading: string;
}

export const Heading = ({ heading }: IHeading) => {
  return (
    <>
      <h1 className='heading'>{heading}</h1>
    </>
  );
};
