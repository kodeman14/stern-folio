export default function Testimonials({ jsonData }) {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {jsonData.testimonials &&
                  jsonData.testimonials.map((item, i) => {
                    return (
                      <li key={i}>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* div.flexslider ends */}
          </div>
          {/* div.flex-container ends */}
        </div>
        {/* row ends */}
      </div>
      {/* text-container ends */}
    </section>
  );
}
