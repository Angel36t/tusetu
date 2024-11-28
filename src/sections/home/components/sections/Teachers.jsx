const people = [
  {
    name: "Tony Robbins",
    role: "Estratega de Vida y Negocios",
    imageUrl:
      "https://cdn.sanity.io/images/nyyhaljw/production/3649fc07df8bc585aea452126ee2d7e516cf6b64-512x512.jpg?w=512&h=512&q=80&auto=format",
  },
  {
    name: "Eckhart Tolle",
    role: "Autor y Maestro Espiritual",
    imageUrl:
      "https://yogaterapia.es/wp-content/uploads/2023/06/Eckhart-Tolle1-web.jpg",
  },
  {
    name: "Michael Beckwith",
    role: "Fundador del Centro Espiritual Agape",
    imageUrl:
      "https://storage.googleapis.com/mv-prod-blog-en-assets/2023/09/90d43a94-michael-beckwith.webp",
  },
  {
    name: "Peter Sage",
    role: "Emprendedor y Orador Motivacional",
    imageUrl:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/stv3urgki59rple642mjj7oh5i.jpg",
  },
  {
    name: "Christopher Bache",
    role: "Psicólogo Transpersonal e Investigador",
    imageUrl:
      "https://galileocommission.org/wp-content/uploads/BiographiesImages/Christopher-Bache-239x300.jpg",
  },
  {
    name: "Bruce Lipton",
    role: "Biólogo Celular y Autor",
    imageUrl:
      "https://fotos.perfil.com/2024/11/14/trim/1280/720/bruce-lipton-1911808.jpg",
  },
  {
    name: "Joe Dispenza",
    role: "Doctor en Quiropráctica y Autor",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/j54ifs2ddacl6v63mfbmba7d7r.jpg",
  },
  {
    name: "BJ Fogg",
    role: "Experto en Ciencias del Comportamiento",
    imageUrl:
      "https://static.wixstatic.com/media/620186_80a65379c84d4be2bda9eeabc35b8939~mv2.jpg/v1/fill/w_400,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/BJ%20Fogg%20headshot.jpg",
  },
  {
    name: "Sue Johnson",
    role: "Psicóloga y Fundadora de la Terapia Focalizada en las Emociones",
    imageUrl:
      "https://www.clarin.com/2024/03/15/Yd5OC_MIc_720x0__1.jpg",
  },
  {
    name: "Wayne Dyer",
    role: "Autor y Orador Motivacional",
    imageUrl:
      "https://www.reeducacioncorporalfuncional.com/wp-content/uploads/2016/06/Dyer1.jpg",
  },
  {
    name: "John Gray",
    role: 'Autor de "Los hombres son de Marte, las mujeres son de Venus"',
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/John_Gray_2014.jpg",
  },
  {
    name: "Thomas Vazhakunnathu",
    role: 'Autor de "God Does Not Roll Dice"',
    imageUrl:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/8v1pmhgmi4rdpjgfef9h9jjeb5._SX450_CR0%2C0%2C450%2C450_.jpg",
  },
  {
    name: "Wim Hof",
    role: "Creador del Método Wim Hof",
    imageUrl:
      "https://www.latercera.com/resizer/6foUx_0I9jwBiGnPjaQnTEr4lIU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/JQKSCCZM4VBSJLEYLSSYIBZMJY.jpg",
  },
  {
    name: "Vishen Lakhiani",
    role: "Fundador de Mindvalley",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Vishen_Lakhiani_2021.png",
  },
  {
    name: "Jay Shetty",
    role: "Ex Monje y Orador Motivacional",
    imageUrl:
      "https://www.wsb.com/wp-content/uploads/2022/03/Shetty_Jay_ORIGINAL-768x1024.jpg",
  },
  {
    name: "Tom Bilyeu",
    role: "Emprendedor y Presentador de Impact Theory",
    imageUrl:
      "https://www.aurumbureau.com/wp-content/uploads/2020/11/Aurum-Speakers-Bureau-Tom-Bilyeu.jpg",
  },
];

export default function Teachers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Mis Maestros
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Siempre me ha llamado el aprender, aun más cuando es un tema que
            nutre mi SER, puliendo mi percepción y entendimiento del interior.
            Estos maestros han compartido su sabiduría conmigo, y por ello les
            estoy eternamente agradecido.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full object-cover"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
