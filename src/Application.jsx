import { Fragment } from 'react/jsx-runtime';
import "./main.css";
import "./responsive.css";

const Application = () => {



  return (
    <Fragment>
      <header>
        <a href="" id="button_back">
          <img src="/assets/icons/arrow-left.svg" alt="" />
          Back
        </a>
        <a href="">
          <img src="/assets/icons/heart.svg" alt="" />
        </a>
        <a href="">
          <img src="/assets/icons/folder.svg" alt="" />
        </a>
      </header>
      <main>
        <section className="form-wrapper">
          <div className="error" id="error_box">
            Please enter Artist name longer than 3 letter
          </div>
          <form className="search" id="search_form">
            <input
              className="search--name"
              id="search_name"
              type="text"
              placeholder="Artist"
            />
            <select className="search--genre">
              Genre
              <option>Punk, Dub, Funk</option>
              <option>Pop, Disco</option>
              <option>Hip-Hop</option>
            </select>
            <select className="search--decade">
              Decade
              <option>2020-30 рр.</option>
              <option>2010-20 рр.,</option>
              <option>2000-10 рр.,</option>
              <option>1990-00 рр.,</option>
              <option>1980-90 рр.,</option>
              <option>1970-80 рр.,</option>
              <option>1960-70 рр.,</option>
              <option>1950-60 рр.,</option>
            </select>
            <select className="search--country">
              Country
              <option>Ukraine</option>
              <option>USA</option>
              <option>UK</option>
              <option>France</option>
              <option>Spain</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>Portugal</option>
            </select>
            <button className="button search--submit" type="submit">
              Search
            </button>
          </form>
        </section>
        <section className="albums-wrapper">
          {/* one item */}
          <div className="album">
            <img
              src="/assets/albums/album_1.jpg"
              srcSet="/assets/albums/album_1_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite" id="album_1">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
          {/* one item */}
          <div className="album">
            <img
              src="/assets/albums/album_2.jpg"
              srcSet="/assets/albums/album_2_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite" id="album_2">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
          {/* one item */}
          <div className="album">
            <img
              src="/assets/albums/album_3.jpg"
              srcSet="/assets/albums/album_3_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite" id="album_3">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
          {/* one item */}
          <div className="album" id="album_4">
            <img
              src="/assets/albums/album_4.jpg"
              srcSet="/assets/albums/album_4_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
          {/* one item */}
          <div className="album">
            <img
              src="/assets/albums/album_5.jpg"
              srcSet="/assets/albums/album_5_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite" id="album_5">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
          {/* one item */}
          <div className="album">
            <img
              src="/assets/albums/album_6.jpg"
              srcSet="/assets/albums/album_6_2x.jpg 2x"
              alt="AC/DC - Let There Be Rock"
            />
            <div className="album--favorite" id="album_6">
              <img src="/assets/icons/heart_black.svg" alt="" />
            </div>
            <div className="album--name">Let There Be Rock</div>
            <div className="album--band">AC/DC</div>
            <div className="album--year">
              <span>Year :</span>
              <span>1990</span>
            </div>
            <div className="album--style">
              <span>Style :</span>
              <span>Punk, Dub, Funk</span>
            </div>
            <div className="album--country">
              <span>Country :</span>
              <span>USA</span>
            </div>
            <a href="" className="button album-add">
              Add <img src="/assets/icons/plus.svg" alt="" />
            </a>
          </div>
        </section>
        {/* pagination*/}
        <nav className="pagination-wrapper">
          <a className="button active" href="index.html?page=1">
            1
          </a>
          <a href="index.html?page=2">2</a>
          <a href="index.html?page=3">3</a>
          <span>...</span>
          <a href="index.html?page=8">8</a>
        </nav>
      </main>
    </Fragment>
  );
};

export default Application;
