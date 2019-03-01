import _ from 'lodash';
import geolib from 'geolib';


const locations =  [
  {
    "id": 1,
    "title": "São Miguel Paulista",
    "description": "Av: Antonio Louzada Antunes, 282, Cid. Pedro José Nunes - São Miguel Pta.",
    "cep": "08061-000",
    "telefone": "(11) 2297-2845",
    "fax": "(11) 2037-8178",
    "latitude": -23.502216,
    "longitude": -46.464579,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/sao-miguel-paulista.jpg"
  },
  {
    "id": 2,
    "title": "Cidade A.E. Carvalho",
    "description": "Av. Águia de Haia, 1704, Cidade A.E. Carvalho",
    "cep": "03694-000",
    "telefone": "(11) 2280-2004",
    "fax": "(11) 2280-2004",
    "latitude": -23.530926,
    "longitude": -46.473711,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/cidade-ae-carvalho.jpg"
  },
  {
    "id": 3,
    "title": "Vila Matilde",
    "description": "Av. Waldemar Carlos Pereira, 76, Vila Dalila",
    "cep": "03533-000",
    "telefone": "(11) 2654-0432",
    "fax": "(11) 2654-0432",
    "latitude": -23.541285,
    "longitude": -46.524160,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/vila-matilde.png"
  },
  {
    "id": 4,
    "title": "Carapicuíba",
    "description": "Estrada de Cabreúva, 42, Vila Marcondes",
    "cep": "06321-000",
    "telefone": "(11) 4189-2146",
    "fax": "(11) 4189-2146",
    "latitude": -23.540246,
    "longitude": -46.833704,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/carapicuiba.jpg"
  },
  {
    "id": 5,
    "title": "Jardim Danfer",
    "description": "R. Pastoril de Itapetininga, 519, Jardim Danfer",
    "cep": "03729-000",
    "telefone": "(11) 2541-4788",
    "fax": "(11) 2943-1520",
    "latitude": -23.540246,
    "longitude": -46.504416,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-danfer.jpg"
  },
  {
    "id": 6,
    "title": "Jardim Santa Maria",
    "description": "Rua Uxi, 43, Jardim Santa Maria",
    "cep": "03576-090",
    "telefone": "(11) 2725-4140",
    "fax": "(11) 2725-4823",
    "latitude": -23.550811,
    "longitude": -46.508185,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-santa-maria.jpg"
  },
  {
    "id": 7,
    "title": "Jardim Brasília",
    "description": "Av. Osvaldo Valle Cordeiro, 152, Jardim Brasília",
    "cep": "03584-000",
    "telefone": "(11) 2742-2950",
    "fax": "(11) 2741-1734",
    "latitude": -23.554632,
    "longitude": -46.492339,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-brasilia.jpg"
  },
  {
    "id": 8,
    "title": "Santo André",
    "description": "Av. Sapopemba, 606, Jardim das Maravilhas",
    "cep": "09250-301",
    "telefone": "(11) 4476-7978",
    "fax": "(11) 4476-7963",
    "latitude": -23.620934,
    "longitude": -46.513494,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/santo-andre.jpg"
  },
  {
    "id": 9,
    "title": "Jardim Aricanduva",
    "description": "Av. Rio das Pedras, 1184, Jardim Aricanduva",
    "cep": "03452-100",
    "telefone": "(11) 2725-4143",
    "fax": "(11) 2725-4143",
    "latitude": -23.565458,
    "longitude": -46.512679,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-aricanduva.jpg"
  },
  {
    "id": 10,
    "title": "Jardim Helena Maria",
    "description": "Av. Presidente Costa e Silva, 901, Jardim Helena Maria",
    "cep": "03576-090",
    "telefone": "(11) 2725-4140",
    "fax": "(11) 2725-4823",
    "latitude": -23.500183,
    "longitude": -46.795923,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-helena-maria.jpg"
  },
  {
    "id": 11,
    "title": "Jardim IV Centenário",
    "description": "Rua Córrego do Bom Jesus, 407, Jardim IV Centenário",
    "cep": "03933-030",
    "telefone": "(11) 2253-9386",
    "fax": "(11) 2253-9472",
    "latitude": -23.582736,
    "longitude": -46.497045,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/jardim-iv-centenario.jpg"
  },
  {
    "id": 12,
    "title": "Tatuapé",
    "description": "Rua Emilia Marengo, 140, Tatuapé - SP",
    "cep": "03336-000",
    "telefone": "0800-7702501",
    "latitude": -23.552891,
    "longitude": -46.565935,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/tatuape.jpg"
  },
  {
    "id": 14,
    "title": "Mooca",
    "description": "Rua do Oratório, 1166, Mooca - SP",
    "cep": "03116-000",
    "telefone": "(11) 96576-0786",
    "latitude": -23.564796,
    "longitude": -46.593424,
    "imagem": "http://www.grupochama.com.br/app/images/lojas/mooca.jpg"
  }
]

export default places = (latitude,longitude)=>{
  const location = geolib.orderByDistance( {latitude: latitude,longitude:longitude}, locations);
  
  const distances = location.map((r)=>{  
      console.log("Objeto",r)
      return ({...locations[r.key],cod:[r.key]});
  })
  console.log(distances);
  return distances;
}
