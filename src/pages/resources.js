import { useQuery, gql } from "@apollo/client";
import room6 from "../Assets/Addons/rooms/room6.jpeg";
import room8 from "../Assets/Addons/rooms/room8.jpeg";
import room5 from "../Assets/Addons/rooms/room5.jpeg";
import VineLeft from "../Assets/Addons/decoration/vine_left";
import { useEffect } from "react";

const GET_RESOURCES = gql`
  query Resources {
    resources {
      id
      name
    }
  }
`;
const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const { data, loading, error } = useQuery(GET_RESOURCES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Not loaded</p>;
  return (
    <>
      {/* <section className="resource">
        {data.resources.map((resource) => (
          <div className="resource_item" key={resource.id}>
            {resource.name}
            <button className="btn_resource_reserve">Reserve</button>
          </div>
        ))}
      </section> */}
      <main className="room_main">
        <aside className="room_filters">
          <h2>Room Type</h2>
          <h2>Room area</h2>
          <h2>Price range</h2>
        </aside>
        <section className="resource">
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room5} alt="room5" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room6} alt="room6" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room8} alt="room8" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
        </section>
      </main>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
    </>
  );
};

export default Resources;
