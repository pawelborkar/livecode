import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
const Result = () => {
  return (
    <div className="flex flex-col h-screen w-1/4 p-2 bg-[#ffe6bf]">
      <Card className="py-4 h-1/2">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Result</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
      <Card className="py-4 bottom-0 mt-2 h-1/2 text-white bg-[#150a2a]">
        <CardHeader className="pb-0  pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Terminal</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;
