import style from "./Body.module.css";

function Body() {
  return (
    <>
      {/* carousel */}
      <div className={`${style.wrapper}`}>
        <div className={`${style.carouselContainer}`}>
          <div className={`${style.carousel}`}>
            <div id="skyline" className={`${style.carouselItem}`}>
              <img
                src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Skyline of Wai Tan, Shanghai"
                className="carousel__image"
              />
            </div>
            <div id="great-wall-of-china" className={`${style.carouselItem}`}>
              <img
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Great wall of China."
                className="carousel__image"
              />
            </div>
            <div
              id="sunset-on-the-li-river"
              className={`${style.carouselItem}`}
            >
              <img
                src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Sunset on the Li River as the few remaining cormorant fisherman pack their."
                className="carousel__image"
              />
            </div>
          </div>
          <div id="controls" className={`${style.controls}`}>
            <a href="#skyline" className={`${style.controlsDot}`}>
              <span className={`${style.visuallyhidden}`}>
                Skyline of Wai Tan, Shanghai
              </span>
            </a>
            <a href="#great-wall-of-china" className={`${style.controlsDot}`}>
              <span className={`${style.visuallyhidden}`}>
                Great wall of China
              </span>
            </a>
            <a
              href="#sunset-on-the-li-river"
              className={`${style.controlsDot}`}
            >
              <span className={`${style.visuallyhidden}`}>
                Sunset on the Li River
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* messageSection */}
      <div className={`${style.messageSection}`}>
        <div className={`${style.part1}`}>
          <h1>THINK HEALTH. THINK MESSAGE</h1>
          <p>
            A computer program can easily produce gibberish - especially if it
            has been provided with garbage beforehand. This program does
            something a little different. It takes a block of text as input and
            works{" "}
          </p>
        </div>
        <div className={`${style.part2}`}>
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </div>
      {/* featuress */}
      <div className={`${style.featureSection}`}>
        <p className={`${style.paragraph}`}>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free,In the first place we have granted to God, and by this
          our present charter confirmed for us and our heirs forever that the
          English Church shall be free
        </p>
        <p>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free,In the first place we have granted to God, and by this
          our present charter confirmed for us and our heirs forever that the
          English Church shall be free
        </p>
        <p>
          In the first place we have granted to God, and by this our present
          charter confirmed for us and our heirs forever that the English Church
          shall be free,In the first place we have granted to God, and by this
          our present charter confirmed for us and our heirs forever that the
          English Church shall be free
        </p>
        <hr></hr>
      </div>
      {/* contact sectiob   */}

      <div className={`${style.contact}`} id="contact">
        <h1>Family Wellness, Massage Therepy</h1>
        <p>152,  village and post badgaon soraon praygraj</p>
        <p>+91 8726524497</p>
      </div>

    </>
  );
}
export default Body;
