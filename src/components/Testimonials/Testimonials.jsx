import './Testimonials.scss'

function Testimonials() {

  const data = [
     {
        id: 1,
        name: "Person 1",
        title: "CTO of ABC Inc.",
        icon: "https://yt3.ggpht.com/ytc/AKedOLQxW54IhTwy9xJtpoF_7RLwNnkuKIDL1iBdriPf8g=s900-c-k-c0x00ffffff-no-rj",
        description: "Labore aliquip non esse deserunt Labore aliquip non esse deserunt Labore aliquip non esse deserunt",
        img: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
    },
    {
        id: 2,
        name: "Person 2",
        title: "Manager at House.",
        icon: "https://yt3.ggpht.com/ytc/AKedOLQxW54IhTwy9xJtpoF_7RLwNnkuKIDL1iBdriPf8g=s900-c-k-c0x00ffffff-no-rj",
        description: "Laboris commodo mollit mollit eu nostrud voluptate sunt. Laboris commodo mollit mollit eu nostrud voluptate.",
        img: "https://muffingroup.com/blog/wp-content/uploads/2020/05/calm.jpg",
        featured: true,
    },
    {
        id: 3,
        name: "Person 3",
        title: "CEO of his own company.",
        icon: "https://yt3.ggpht.com/ytc/AKedOLQxW54IhTwy9xJtpoF_7RLwNnkuKIDL1iBdriPf8g=s900-c-k-c0x00ffffff-no-rj",
        description: "Labore aliquip non esse deserunt Labore aliquip non esse deserunt Labore aliquip non esse deserunt",
        img: "https://store-images.s-microsoft.com/image/apps.35577.f15d0f85-46ea-4718-b2fe-f3c029eb49d5.9d9dc0fd-59fe-4dc0-8200-29b8fd740427.fcabd77b-4df3-40ff-a2bb-18b568d947a5"
    },
  ]

  return (
    <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {data.map((item) => (
        <div className={item.featured ? "card featured" : "card"}>
          <div className="top">
            <img 
              src="https://svgsilh.com/svg/304729.svg" 
              alt="arrow"
              className="left" />
            <img 
              src={item.img}
              alt="person"
              className="user" />
            <img 
              src={item.icon}
              alt="youtube"
              className="right" />
          </div>
          <div className="center">
            {item.description}
          </div>
          <div className="bottom">
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Testimonials