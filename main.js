//criar variavel constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Coletar() 
{
   let cidade = document.querySelector('.input-cidade').value
   Dados(cidade)
}

//consumir dados da API open weather

async function Dados(cidade) 
{
   const key = 'e0283766cee7e7e70be7e75409ae8042'
   let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
   console.log(dados)
   ExibirDados(dados)
}

//Função Insterir dados na tela
function ExibirDados(dados)
{
   document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
   document.querySelector('.temperatura').innerHTML = (dados.main.temp ).toFixed(0) + "°C"
   document.querySelector('.previsao').innerHTML = dados.weather[0].description
   document.querySelector('.Umidade').innerHTML = "Umidade relativa do Ar " + dados.main.humidity
   document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
   document.querySelector(".VelVento").innerHTML = "Velocidade do vento =" + (dados.wind.speed).toFixed(0) + "Km/H"
}