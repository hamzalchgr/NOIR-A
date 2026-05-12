const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-20 md:px-25 lg:px-50 flex flex-col gap-12">
      <div className="flex flex-col items-center gap-6">
        <h5 className="text-text-muted font-normal italic">About</h5>
        <h4 className="heading-4">
          Are you really choosing ordinary when Noirea offers pure class in
          Cracow?
        </h4>
      </div>

      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex items-center justify-between gap-12 md:flex-col md:items-start">
          <div className="aspect-square w-[186px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/Cs0On3K1o9zRW9pqlKEQHovuz4.jpeg?scale-down-to=1024"
              alt=""
              loading="lazy"
            />
          </div>

          <div className="aspect-square w-[104px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/81LOa6AClrVBaqv25rclYLVtegg.jpg?scale-down-to=512"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-center md:text-start">
          At Noirea, we believe coffee and cuisine should be an experience, not
          just a routine. Nestled in the heart of Kraków, our space blends
          timeless elegance with modern indulgence, where every sip and bite is
          crafted with precision. Whether you’re here for a morning espresso, a
          leisurely brunch, or an intimate dinner, Noirea invites you to savor
          the moment in a setting designed for those who appreciate the finer
          things.
        </p>
      </div>
    </section>
  );
};

export default About;
