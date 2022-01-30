import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_meetups = [
  {
    id: "1",
    title: "meetup for node",
    image:
      "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/pug-1-896x504.png",
    address: "some undisclose location",
    description: "this is a first meetup",
  },
  {
    id: "2",
    title: "meetup for node2",
    image:
      "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/pug-1-896x504.png",
    address: "some undisclose location",
    description: "this is a first meetup",
  },
  {
    id: "3",
    title: "meetup for node3",
    image:
      "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/pug-1-896x504.png",
    address: "some undisclose location",
    description: "this is a first meetup",
  },
  {
    id: "4",
    title: "meetup for node4",
    image:
      "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/pug-1-896x504.png",
    address: "some undisclose location",
    description: "this is a first meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: Dummy_meetups,
    },
  };
}

export default HomePage;
