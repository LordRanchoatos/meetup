import MeetupDetails from "../../components/meetups/MeetupDetails";

function DetailsPage(props) {
  return (
    <MeetupDetails
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
      {
        params: {
          meetupId: "3",
        },
      },
      {
        params: {
          meetupId: "4",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from api

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    //id: meetupId,
    props: {
      image:
        "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/pug-1-896x504.png",
      title: "A first Meetup",
      address: "SOme place on earth",
      description: "lets discuss code world wide",
    },
  };
}
export default DetailsPage;
