import { Fragment } from "react";
import clsx from "clsx";
import "./main.scss";
import "./responsive.scss";

type Genre = {
  id: number;
  title: string;
};

type Style = {
  name: string;
  title: string;
};

type Vinyl = {
  id: number;
  image: {
    normal: string;
    double: string;
  };
  title: string;
  artist: string;
  year: string;
  country: string;
  inFavorites?: boolean;
  inCollection?: boolean;
  genreId: number;
  styles: string[];
};

type GenreColor = {
  color: string;
  colorTheme: "dark" | "light";
};

const Application: React.FC = () => {
  const genreList: Genre[] = [
    {
      id: 1,
      title: "Electronic",
    },
    {
      id: 2,
      title: "Jazz",
    },
    {
      id: 3,
      title: "Rock",
    },
    {
      id: 4,
      title: "Country",
    },
    {
      id: 5,
      title: "Hip-Hop",
    },
  ];

  const stylesList: Style[] = [
    {
      name: "house",
      title: "House",
    },
    {
      name: "disco",
      title: "Disco",
    },
    {
      name: "french_house",
      title: "French House",
    },
    {
      name: "modal",
      title: "Modal",
    },
    {
      name: "blues_rock",
      title: "Blues Rock",
    },
    {
      name: "garage_rock",
      title: "Garage Rock",
    },
    {
      name: "alternative_rock",
      title: "Alternative Rock",
    },
    {
      name: "conscious",
      title: "Conscious",
    },
    {
      name: "dub",
      title: "Dub",
    },
    {
      name: "punk",
      title: "Punk",
    },
    {
      name: "funk",
      title: "Funk",
    },
  ];

  const mapGenreColor: Record<number, GenreColor> = {
    [1]: {
      color: "#B71C1C",
      colorTheme: "dark",
    },
    [2]: {
      color: "#ffc3f3",
      colorTheme: "light",
    },
    [3]: {
      color: "#083644",
      colorTheme: "dark",
    },
    [4]: {
      color: "#ffa161",
      colorTheme: "dark",
    },
    [5]: {
      color: "#00897B",
      colorTheme: "dark",
    },
  };

  const collectionList: number[] = [2, 6];
  const favoritesList: number[] = [1, 4, 5];

  const vinylList: Vinyl[] = [
    {
      id: 1,
      image: {
        normal: "/assets/albums/album_1_2x.jpg",
        double: "/assets/albums/album_1_2x.jpg 2x",
      },
      title: "Let There Be Rock",
      artist: "AC/DC",
      year: "1990",
      country: "USA",
      inFavorites: true,
      inCollection: true,
      genreId: 1,
      styles: ["dub", "punk", "funk"],
    },
    {
      id: 2,
      image: {
        normal: "/assets/albums/album_2_2x.jpg",
        double: "/assets/albums/album_2_2x.jpg 2x",
      },
      title: "Discovery",
      artist: "Daft Punk", // артистів може бути багато
      year: "2001",
      country: "Europe",
      genreId: 1,
      styles: ["house", "disco", "french_house"],
    },
    {
      id: 3,
      image: {
        normal: "/assets/albums/album_3_2x.jpg",
        double: "/assets/albums/album_3_2x.jpg 2x",
      },
      title: "Kind Of Blue",
      artist: "Miles Davis",
      year: "1959",
      country: "US",
      genreId: 2,
      styles: ["modal"],
    },
    {
      id: 4,
      image: {
        normal: "/assets/albums/album_4_2x.jpg",
        double: "/assets/albums/album_4_2x.jpg 2x",
      },
      title: "Elephant",
      artist: "The White Stripes",
      year: "2003",
      country: "US",
      genreId: 3,
      styles: ["blues_rock", "garage_rock"],
    },
    {
      id: 5,
      image: {
        normal: "/assets/albums/album_5_2x.jpg",
        double: "/assets/albums/album_5_2x.jpg 2x",
      },
      title: "Stoned Templed",
      artist: "Pilot",
      year: "2018",
      country: "US",
      genreId: 5,
      styles: ["conscious"],
    },
    {
      id: 6,
      image: {
        normal: "/assets/albums/album_6_2x.jpg",
        double: "/assets/albums/album_6_2x.jpg 2x",
      },
      title: "Good Kid, M.A.A.d City",
      artist: "Kendrick Lamar",
      year: "2012",
      country: "US",
      genreId: 5,
      styles: ["conscious"],
    },
  ];

  const searchTitle = "";

  const handleAddToCollection = (e: React.MouseEvent, vinyl: Vinyl) => {
    alert("Add to collection: " + vinyl.title);
  };

  const handleRemoveFromCollection = (e: React.MouseEvent, vinyl: Vinyl) => {
    alert("Remove from collection: " + vinyl.title);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form is sent");
  };

  const handleFavorite = (e: React.MouseEvent, vinyl: Vinyl) => {
    console.log(vinyl.title);
  };

  const renderStyle = (styleName: string) => {
    const styleItem = stylesList.find((item) => item.name === styleName);

    return <span>{styleItem ? styleItem.title : styleName}</span>;
  };

  const renderVinyl = (item: Vinyl) => {
    const vinyl = {
      ...item,
      genre: genreList.find((genre) => genre.id === item.genreId),
      genreColors: mapGenreColor[item.genreId],

      inCollection: collectionList.includes(item.id),
      inFavorites: favoritesList.includes(item.id),
    };

    return (
      <div key={vinyl.id} className="album">
        <img
          src={vinyl.image.normal}
          srcSet={vinyl.image.double}
          alt="AC/DC - Let There Be Rock"
        />
        <div className="album--favorite" id="album_1">
          <button
            onClick={(e) => handleFavorite(e, vinyl)}
            className="button-fav"
          >
            <svg
              fill={vinyl.inFavorites ? "#FF4500" : "#000"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M480-140q-11 0-22-4t-19-12l-53-49Q262-320 171-424.5T80-643q0-90 60.5-150.5T290-854q51 0 101 24.5t89 80.5q44-56 91-80.5t99-24.5q89 0 149.5 60.5T880-643q0 114-91 218.5T574-205l-53 49q-8 8-19 12t-22 4Z" />
            </svg>
          </button>
        </div>
        <div className="album--name">{vinyl.title}</div>
        <div className="album--band">{vinyl.artist}</div>
        <div className="album--year">
          <span>Year :</span>
          <span>{vinyl.year}</span>
        </div>
        <div className="album--style">
          <span
            style={{
              backgroundColor: vinyl.genreColors.color,
              color: vinyl.genreColors.colorTheme === "dark" ? "#fff" : "#000",
            }}
          >
            {vinyl.genre ? vinyl.genre.title : "Unknown genre"}
          </span>
          <span>
            {vinyl.styles.map((item, index) => (
              <Fragment key={index}>{renderStyle(item)}</Fragment>
            ))}
          </span>
        </div>
        <div className="album--country">
          <span>Country:</span>
          <span>USA</span>
        </div>
        <button
          onClick={(e) => {
            if (vinyl.inCollection) {
              handleRemoveFromCollection(e, vinyl);
            } else {
              handleAddToCollection(e, vinyl);
            }
          }}
          className={clsx("button", {
            "button--active": vinyl.inCollection,
          })}
        >
          <span>
            {vinyl.inCollection ? "In collection" : "Add to collection"}
          </span>
          {vinyl.inCollection ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M479.825-200Q467-200 458.5-208.625T450-230v-220H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z" />
            </svg>
          )}
        </button>
      </div>
    );
  };

  return (
    <Fragment>
      <header className={clsx("foo", { baz: true, bat: null })}>
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
          <form
            className="search"
            id="search_form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="search--name"
              id="search_name"
              type="text"
              placeholder="Artist"
              onChange={handleInputChange}
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
          <section className="genres-wrapper">
            <ul>
              {genreList.map((genre) => {
                return (
                  <li
                    key={genre.id}
                    style={{
                      backgroundColor: mapGenreColor[genre.id].color,
                      color:
                        mapGenreColor[genre.id].colorTheme === "dark"
                          ? "#fff"
                          : "#000",
                    }}
                  >
                    {genre.title}
                  </li>
                );
              })}
            </ul>
          </section>

          {vinylList
            .filter((item) => {
              return item.title.startsWith(searchTitle);
            })
            .map((item) => renderVinyl(item))}
          {/* one item */}
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
